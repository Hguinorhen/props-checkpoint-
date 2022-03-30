import React from "react";
import Profile from "./Profile/Profile";
import Img from "./Profile/images/user.jpg";
import "./App.css";

export default function App() {
  function handleName(name) {
    alert(`Hello my name is ${name}`);
  }

  return (
    <div className="App">
      <Profile
        fullName=" Hagui Norhn"
        bio=" Stand Tall And Proud "
        profession="Full-Stack js Developer"
        handleName={handleName}
      >
        <img
          style={{ borderRadius: "100%", width: "300px", height: "300px" }}
          src={Img}
          alt="avatar"
        />
      </Profile>
    </div>
  );
}
