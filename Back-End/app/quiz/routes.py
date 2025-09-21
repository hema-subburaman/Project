from flask import Blueprint, request, jsonify
from app.models import db, Quiz

quiz_bp = Blueprint("quiz", __name__)

# Get questions for a specific level (10 questions per level)
@quiz_bp.route("/questions/<int:level>", methods=["GET"])
def get_questions_by_level(level):
    if level < 1:
        return jsonify({"message": "Invalid level"}), 400

    start = (level - 1) * 10
    questions = Quiz.query.offset(start).limit(10).all()
    result = []
    for q in questions:
        result.append({
            "id": q.id,
            "question": q.question,
            "options": q.options,
            "correct_answer": q.correct_answer
        })
    return jsonify(result), 200

# Submit answer and check result
@quiz_bp.route("/submit", methods=["POST"])
def submit_answer():
    data = request.get_json()
    question_id = data.get("question_id")
    selected = data.get("selected")

    question = Quiz.query.get(question_id)
    if not question:
        return jsonify({"message": "Question not found"}), 404

    is_correct = question.correct_answer == selected
    return jsonify({
        "question_id": question_id,
        "selected": selected,
        "correct": question.correct_answer,
        "is_correct": is_correct
    }), 200
