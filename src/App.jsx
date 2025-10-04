import React from "react";
import Greeting from "./components/Greeting";
import UserList from "./components/UserList";

const App = () => {
  const users = [
    { id: 1, name: "Marry", email: "marry@2004" },
    { id: 2, name: "Alex", email: "alex@123" },
    { id: 3, name: "John", age: 24, email: "johan@578" },
    { id: 4, name: "Alice", age: 26, email: "alice@2004" },
  ];

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
      }}
    >
      <Greeting name="Users List" />
      <UserList users={users} />
    </div>
  );
};

export default App;
