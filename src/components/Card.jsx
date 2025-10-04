import React from "react";

const Card = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        backgroundColor: "lightgray",
        height:'100px',
        width:'400px'
      }}
    >
      {children}
    </div>
  );
};

export default Card;
