import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((u, index) => (
        <UserCard key={index} user={u} />
      ))}
    </div>
  );
};

export default UserList;
