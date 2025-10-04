import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserProvider";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <div
      style={{
        padding: "25px",
        backgroundColor: "lightgoldenrodyellow",
        display: "flex",
        justifyContent: "flex-end",
        fontFamily: "monospace",
      }}
    >
      {user ? 
      <>
      <span style={{ marginRight: "20px" }}>Welcome {user.name}</span>
      <button style={{ fontFamily: "monospace" }} onClick={logout}>
        Logout
      </button>  </> :
      <span>PLease Login</span>
      }
    
    </div>
  );
};

export default Navbar;
