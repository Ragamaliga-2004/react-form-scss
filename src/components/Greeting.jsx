import React from "react";

const Greeting = ({ name }) => {
  return (
    <h1
      style={{
        color: "#4B0082",
        textAlign: "center",
        fontSize: "2.5rem",
        marginBottom: "30px",
        textShadow: "2px 2px #ccc",
      }}
    >
      Hello {name}!
    </h1>
  );
};

export default Greeting;
