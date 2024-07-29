import React from "react";
import "./App.css";

function Profile({ name, age, bio }) {
  return (
    <div className="profile">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
}

export default Profile;
