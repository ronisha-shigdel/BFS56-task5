import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Button from "./Button";
import "./App.css";

function App() {
  return (
    <div>
      <Header title="Welcome to my profile" />
      <Profile name="Ronisha Shigdel" age={25} bio="Hey there." />
      <Button label="LinkedIn Profile" />
    </div>
  );
}

export default App;
