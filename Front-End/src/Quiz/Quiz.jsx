import React, { useState, useEffect } from "react";
import "./Quiz.css";

const Quiz = () => {
  const [level, setLevel] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/quiz/questions/${level}`)
      .then(res => res.json())
      .then(data => {
        setQuestions(data);
        setCurrentQ(0);
        setSelectedOption("");
        setShowResult(false);
      });
  }, [level]);

  const handleEndQuiz = () => {
    // navigate to farmer page
    navigate("/farmer");
  };

  const handleAnswer = async (opt) => {
    setSelectedOption(opt);

    // Call API to check answer
    const res = await fetch("http://localhost:5000/api/quiz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        question_id: questions[currentQ].id,
        selected: opt
        })
    });

    const data = await res.json();
    if (data.is_correct) {
        setScore(prevScore => prevScore + 1);
    }

    // move to next question
    setTimeout(() => {
        if (currentQ + 1 < questions.length) {
        setCurrentQ(currentQ + 1);
        setSelectedOption("");
        } else if (level < 3) {
        setLevel(level + 1);
        } else {
        setShowResult(true);
        }
    }, 500);
    };


  if (!questions.length) return <p className="loading">Loading questions...</p>;

  if (showResult)
    return (
      <div className="quiz-container">
        <h2>🎉 Quiz Completed!</h2>
        <p>
          Your Score: <strong>{score}/{questions.length * 3}</strong>
        </p>
      </div>
    );

  const progressPercent = ((currentQ + 1) / questions.length) * 100;

  return (
    <div>
    <div className="quiz-container">
      <h2>Level {level}</h2>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercent}%` }}></div>
      </div>
      <h3 className="question">{questions[currentQ].question}</h3>
      <div className="options">
        {questions[currentQ].options.map((opt, i) => (
          <button
            key={i}
            className={`option-btn ${
              selectedOption
                ? opt === questions[currentQ].correct_answer
                  ? "correct"
                  : opt === selectedOption
                  ? "wrong"
                  : ""
                : ""
            }`}
            onClick={() => !selectedOption && handleAnswer(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
      <p className="score">Score: {score}</p>
    </div>
    <button onClick={handleEndQuiz}>End the Quiz</button>
    </div>
  );
};

export default Quiz;
