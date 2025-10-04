import React, { useContext, useState } from "react";
import { UserContext } from "./UserProvider";

const Login = () => {
  const { user, login } = useContext(UserContext);
  const [name, setName] = useState("");
  if (user)  return null;
  

  return (
    <div>
      <label>Name: </label>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => login(name)}>Login</button>
    </div>
  );
};

export default Login;
