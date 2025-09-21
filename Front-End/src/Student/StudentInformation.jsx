import React, { useState } from "react";
import "./studentInformation.css";
import { useNavigate } from "react-router-dom";

const StudentInformation = () => {
  const [message, setMessage] = useState("");       // For alert message
  const [messageColor, setMessageColor] = useState(""); // For red/green color
  const navigate = useNavigate();
  const [output, setOutput] = useState("");
  const [form, setForm] = useState({
    name: "",
    gender: "",
    age: "",
    profession: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/api/student/addstudentdetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // ✅ Success: green message
        setMessageColor("green");
        alert('Student added successfully!')
        navigate("/student"); // optional redirect
      } else {
        // ❌ Error: red message
        setMessageColor("red");
        setMessage(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessageColor("red");
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <div>
      <h1>STUDENT DETAILS</h1><br></br>
    <div className="form-container">
      <form id="studentForm" onSubmit={handleSubmit}>
        <div className="question">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="question">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
        
            required
            value={form.gender}
            onChange={handleChange}
          >
            <option value="" disabled hidden>Choose...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="question">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Enter your age"
            required
            min="0"
            value={form.age}
            onChange={handleChange}
          />
        </div>
        <div className="question">
          <label htmlFor="profession">Profession</label>
          <select
            id="profession"
            name="profession"
            required
            value={form.profession}
            onChange={handleChange}
          >
            <option value="" disabled hidden>Choose...</option>
            <option value="school">School</option>
            <option value="college">College</option>
            <option value="job">Job</option>
          </select>
        </div>
        <button type="submit">Submit</button>
        <p style={{ color: messageColor, whiteSpace: "pre-line" }}>{message}</p>
      </form>
      <div
        id="output"
        dangerouslySetInnerHTML={{ __html: output }}
      ></div>
    </div>
    </div>
  );
};

export default StudentInformation;
