import React from "react";
import Greeting from "./components/Greeting";
import UserList from "./components/UserList";

const App = () => {
  const users = [
    {
      id: 1,
      name: "Marry",
      email: "raga@2004",
    },
    {
      id: 2,
      name: "Alex",
      email: "alwx@123",
    },
    {
      id:3,
      name:"John",
      age: 24,
      email: "johan@578",
    },
     {
      id: 4,
      name: "Alice",
      age:26,
      email: "marry@2004",
    }
  ];
  return (
    <div style={{ padding: "20px" }}>
      <Greeting name="Users" />
      <UserList users={users} />
    </div>
  );
};

export default App;
