import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: "20px",
        justifyItems: "center",
      }}
    >
      {users.map((u) => (
        <UserCard key={u.id} user={u} />
      ))}
    </div>
  );
};

export default UserList;
