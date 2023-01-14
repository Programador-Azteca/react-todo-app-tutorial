import React from "react";
import ToDoList from "../components/ToDoList/ToDoList";
import logo from "../media/todo_image.svg";

function WelcomePage() {
  return (
    <div className="container">
      <img src={logo} className="box App-logo" alt="logo" />
      <ToDoList className="box" />
    </div>
  );
}

export default WelcomePage;
