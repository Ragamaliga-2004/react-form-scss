import React, { useState } from "react";

const StudentForm = () => {
  const [error, setError] = useState({});

  const [studentForm, setStudentForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    shippingAddress: "",
    city: "",
    zipCode: "",
    cash: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setStudentForm((prevStudentForm) => ({
      ...prevStudentForm,
      [name]: value,
    }));
    
  }

  function validate() {
    let newError = {};
    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validMobile = /^(?:\+91|0)?[6-9][0-9]{9}$/;
    const validZip = /^[1-9][0-9]{5}$/;

    const {
      fullName,
      email,
      phoneNumber,
      shippingAddress,
      city,
      zipCode,
      cash,
    } = studentForm;

    if (fullName.length < 3 || !fullName.trim()) {
      newError.fullName = "FullName must be greater than 3 characters";
    }
    if (!email.trim() || !validEmail.test(email)) {
      newError.email = "Enter a valid Email";
    }
    if (!validMobile.test(phoneNumber)) {
      newError.phoneNumber = "Enter a valid Phone Number";
    }
    if (!shippingAddress.trim()) {
      newError.shippingAddress = "Shipping Address is Required";
    }
    if (!city.trim()) {
      newError.city = "City is Required";
    }
    if (!validZip.test(zipCode)) {
      newError.zipCode = "Enter a valid 6-digit Zip Code";
    }
    if (!cash.trim() || isNaN(cash)) {
      newError.cash = "Cash must be a number";
    }
    return newError;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formValidation = validate();

    if (Object.keys(formValidation).length > 0) {
      setError(formValidation);
    } else {
      setError({});
      setSubmittedData((prevData) => [...prevData, studentForm]);
      setStudentForm({
        fullName: "",
        email: "",
        phoneNumber: "",
        shippingAddress: "",
        city: "",
        zipCode: "",
        cash: "",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Full Name</label>
      <input
        type="text"
        onChange={handleChange}
        name="fullName"
        value={studentForm.fullName}
      />
      {error.fullName && <p style={{ color: "red" }}>{error.fullName}</p>}
      <br />

      <label>Email</label>
      <input
        type="text"
        onChange={handleChange}
        name="email"
        value={studentForm.email}
      />
      {error.email && <p style={{ color: "red" }}>{error.email}</p>}
      <br />

      <label>Phone Number</label>
      <input
        type="text"
        onChange={handleChange}
        name="phoneNumber"
        value={studentForm.phoneNumber}
      />
      {error.phoneNumber && <p style={{ color: "red" }}>{error.phoneNumber}</p>}
      <br />

      <label>Shipping Address</label>
      <textarea
        onChange={handleChange}
        name="shippingAddress"
        value={studentForm.shippingAddress}
      ></textarea>
      {error.shippingAddress && (
        <p style={{ color: "red" }}>{error.shippingAddress}</p>
      )}
      <br />

      <label>City</label>
      <input
        type="text"
        onChange={handleChange}
        name="city"
        value={studentForm.city}
      />
      {error.city && <p style={{ color: "red" }}>{error.city}</p>}
      <br />

      <label>Zip Code</label>
      <input
        type="text"
        onChange={handleChange}
        name="zipCode"
        value={studentForm.zipCode}
      />
      {error.zipCode && <p style={{ color: "red" }}>{error.zipCode}</p>}
      <br />

      <label>Cash</label>
      <input
        type="text"
        onChange={handleChange}
        name="cash"
        value={studentForm.cash}
      />
      {error.cash && <p style={{ color: "red" }}>{error.cash}</p>}
      <br />

      <button type="submit">SUBMIT</button>

      <ul>
        {submittedData.map((s, index) => (
          <li key={index}>
            {s.fullName} <br /> 
            {s.email} <br /> 
             {s.phoneNumber}<br /> 
             {s.shippingAddress}<br /> 

            {s.city} <br /> 
             {s.zipCode}<br /> 
             {s.cash}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default StudentForm;
