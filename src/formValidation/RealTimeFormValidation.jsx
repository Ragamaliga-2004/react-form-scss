import React, { useState } from 'react'

const RealTimeFormValidation = () => {
const [formData, setFormData]=useState({
    fullName : "",
    email: ""
})
const [error, setError]= useState({})

function validate(name,value) {
    let newError = {};
    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-z A-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name === "fullName")
    {
    if (value.length < 3 || !value.trim()) {
      newError.fullName = "FullName must be greater than 3 characters";
    }}
    if (name === "email"){
    if (!value.trim() || !validEmail.test(value)) {
      newError.email = "Enter a valid Email";
    }}
    setError(newError);
    return newError;
}
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    validate(name,value)
  }

function handleSubmit (e){
    e.preventDefault()
    let formError = {};

    Object.keys(formData).forEach((field) => {
      const fieldError = validate(field, formData[field]);
      formError = { ...formError, ...fieldError };
    });
    if (Object.keys(formError).length>0){
        setError(formError)
        alert("Form not submtted")
        

    }
    else
    alert("Form Submitted");
}


  return (
    <form onSubmit={handleSubmit}>
      <label>Full Name</label>
      <input
        type="text"
        onChange={handleChange}
        name="fullName"
        value={formData.fullName}
      />
      {error.fullName && <p style={{ color: "red" }}>{error.fullName}</p>}
      <br />

      <label>Email</label>
      <input
        type="text"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      {error.email && <p style={{ color: "red" }}>{error.email}</p>}
      <br />
      <button type='submit'>Submit</button>

    </form>
  )
}

export default RealTimeFormValidation