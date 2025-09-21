import React, { useState } from "react";
import "./studentInformation.css";

const StudentInformation = () => {
  const [output, setOutput] = useState("");
  const [form, setForm] = useState({
    name: "",
    gender: "",
    age: "",
    farmer: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOutput(
      `<strong>Name:</strong> ${form.name} <br>
      <strong>Gender:</strong> ${form.gender} <br>
      <strong>Age:</strong> ${form.age} <br>
      <strong>School/College:</strong> ${form.student}`
    );
  };

  return (
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
      </form>
      <div
        id="output"
        dangerouslySetInnerHTML={{ __html: output }}
      ></div>
    </div>
  );
};

export default StudentInformation;
