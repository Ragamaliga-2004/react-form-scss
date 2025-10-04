import React from "react";

const Greeting = ({ name }) => {
  return (
    <h1
      style={{
        color: "darkblack",
      }}
    >
      Hello {name}
    </h1>
  );
};

export default Greeting;
