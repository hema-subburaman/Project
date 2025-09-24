import React, { useState } from "react";
import "./generalInformation.css";
import { useNavigate } from "react-router-dom";

const GeneralInformation = () => {
  const [message, setMessage] = useState("");       // For alert message
  const [messageColor, setMessageColor] = useState(""); // For red/green color
  const navigate = useNavigate();
  const [output, setOutput] = useState("");
  const [form, setForm] = useState({
    name: "",
    gender: "",
    age: "",
    is_gardeneing: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/api/general/addgeneraluserdetails",
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
        alert("General User Added Successfully!")
        navigate("/general"); // optional redirect
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
      <h1>GENERAL USER DETAILS</h1><br></br>
    <div className="form-container">
      <form id="generalForm" onSubmit={handleSubmit}>
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
          <label htmlFor="general">Are you interested in gardening</label>
          <select
            id="is_gardeneing"
            name="is_gardeneing"
            required
            value={form.is_gardening}
            onChange={handleChange}
          >
            <option value="" disabled hidden>Choose...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
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

export default GeneralInformation;
