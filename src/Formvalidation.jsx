import React, { useState } from "react";
import Form from "./Form";
import "./Form.css";

const Formvalidation = () => {
  const [error, setError] = useState({});
  const [user, setUser] = useState({
    studentId: "",
    studentName: "",
    dateOfBirth: "",
    emailId: "",
    password: "",
  });

  const [users, setUsers] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;

    setUser((preUser) => ({
      ...preUser,
      [name]: value,
    }));
  }

  function validate() {
    let newError = {};
    const { studentId, studentName, dateOfBirth, emailId, password } = user;

    if (!studentId) {
      newError.studentId = "StudentId is Required";
    }
    if (!studentName.trim()) {
      newError.studentName = " StudentName is Required";
    }
    if (!dateOfBirth) {
      newError.dateOfBirth = "dateOfBirth is Required";
    }
    if (!emailId.includes("@")) {
      newError.emailId = "EmailId is Required";
    }
    if (password.length < 6) {
      newError.password = "Password Length must must be atleast 6 character ";
    }
    return newError;
  }

  function handleSubmit(e) {
    e.preventDefault();
    // const { studentId, studentName, dateOfBirth, emailId, password } = user;

    // if (!studentId || !studentName || !dateOfBirth || !emailId || !password) {
    //   alert("Fill The empty Value");
    //   return;
    // }

    setUsers((preUsers) => [...preUsers, user]);

    // alert("Thank You For Your Response, Form Submitted Successfully");
    const errorValidation = validate();

    if (Object.keys(errorValidation).length > 0) {
      setError(errorValidation);
    } else {
      setError({});
      alert("Thank You For Your Response, Form Submitted Successfully");
      setUser({
        studentId: "",
        studentName: "",
        dateOfBirth: "",
        emailId: "",
        password: "",
      });
    }
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
      {error.studentId && <p style={{color:'darkred', fontWeight:'bolder'}}>{error.studentId}</p>}
        <br />
       <label> Student Name:</label>
      <input
        type="text"
        placeholder="Enter Your Name"
        name="studentName"
        value={user.studentName}
        onChange={handleChange}
      />
      {error.studentName && <p style={{color:'darkred', fontWeight:'bolder'}}>{error.studentName}</p>}
        <br /> <label>Password: </label>
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      {error.password && <p style={{color:'darkred', fontWeight:'bolder'}}>{error.password}</p>}

      <label> Date of Birth:</label>
      <input
        type="date"
        name="dateOfBirth"
        value={user.dateOfBirth}
        onChange={handleChange}
      />
      <label>Enter MailId: </label>
      <input
        type="text"
        placeholder="emailId"
        name="emailId"
        value={user.emailId}
        onChange={handleChange}
      />
      {error.emailId && <p style={{color:'darkred', fontWeight:'bolder'}}>{error.emailId}</p>}

      <br />
        <button type="submit">Submit</button> 
      <ul>
        {users.map((u, index) => (
          <Form
            key={index}
            studentId={u.studentId}
            studentName={u.studentName}
            dateOfBirth={u.dateOfBirth}
            emailId={u.emailId}
            password={u.password}
          />
        ))}
      </ul>
    </form>
  );
};

export default Formvalidation;
