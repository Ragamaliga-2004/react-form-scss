import React, { useState } from "react";
import Form from "./Form";
import "./Form.css";

const App = () => {
  const [user, setUser] = useState({
    studentId: "",
    studentName: "",
    dateOfBirth: "",
  });

  const [users, setUsers] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;

    setUser((preUser) => ({
      ...preUser,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { studentId, studentName, dateOfBirth } = user;

    if (!studentId || !studentName || !dateOfBirth) {
      alert("Fill The empty Value");
      return;
    }

    setUsers((preUsers) => [...preUsers, user]);

    alert("Thank You For Your Response, Form Submitted Successfully");

    setUser({ studentId: "", studentName: "", dateOfBirth: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label> Student Id:</label>
      <input
        type="number"
        placeholder="Enter Your Id"
        name="studentId"
        value={user.studentId}
        onChange={handleChange}
      />
      <br />
      <label> Student Name:</label>
      <input
        type="text"
        placeholder="Enter Your Name"
        name="studentName"
        value={user.studentName}
        onChange={handleChange}
      />{" "}
      <br />
      <label> Date of Birth:</label>
      <input
        type="date"
        name="dateOfBirth"
        value={user.dateOfBirth}
        onChange={handleChange}
      />{" "}
      <br />
      <button type="submit">Submit</button>
      <ul>
        {users.map((u, index) => (
          <Form
            key={index}
            studentId={u.studentId}
            studentName={u.studentName}
            dateOfBirth={u.dateOfBirth}
          />
        ))}
      </ul>
    </form>
  );
};

export default App;
