import React from "react";
import Card from "./Card";

const UserCard = ({ user }) => {
  return (
    <Card>
      <p>
        <b>Name:</b> {user.name}
      </p>
      {user.age && (
        <p>
          <b>Age:</b> {user.age}
        </p>
      )}
      <p>
        <b>Email:</b> {user.email}
      </p>
    </Card>
  );
};

export default UserCard;
