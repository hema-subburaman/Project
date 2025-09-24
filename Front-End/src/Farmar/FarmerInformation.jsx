import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./farmerInformation.css";

const FarmerInformation = () => {
  const [message, setMessage] = useState("");       // For alert message
  const [messageColor, setMessageColor] = useState(""); // For red/green color
  const navigate = useNavigate();
  const [output, setOutput] = useState("");
  const [userId, setUserId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    gender: "",
    age: "",
    farmer: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.id) {
      alert("User not logged in");
      navigate("/login");
      return;
    }

    // Attach user_id to form data
    const payload = { ...form, user_id: user.id };

    try {
      const response = await fetch(
        "http://localhost:5000/api/farmer/addfarmerdetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessageColor("green");
        setMessage(data.message || "Farmer Details Added");
        navigate("/iconspage");
      } else {
        setMessageColor("red");
        setMessage(data.message || "Farmer already exists!");
        navigate("/iconspage");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessageColor("red");
      setMessage("Server error. Please try again.");
    }
  };



  return (
    <div>
    <h1>FARMER DETAILS</h1><br></br>
    <div className="form-container">
      <form id="farmerForm" onSubmit={handleSubmit}>
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
          <label htmlFor="farmer">Are you already a farmer?</label>
          <select
            id="farmer"
            name="farmer"
            required
            value={form.farmer}
            onChange={handleChange}
          >
            <option value="" disabled hidden>Choose...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      <p style={{ color: messageColor, whiteSpace: "pre-line" }}>{message}</p>
      <div
        id="output"
        dangerouslySetInnerHTML={{ __html: output }}
      ></div>
    </div>
    </div>
  );
};

export default FarmerInformation;
