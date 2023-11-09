import React from "react";
import "./LoginSignup.css";

import { useState } from "react";
import email_icon from "../Assets/email.png";
import pasword_icon from "../Assets/password.png";
import user_icon from "../Assets/person.png";
const LoginSignup = () => {
  const [state, setState] = useState("Sign Up");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{state}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {state == "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
          <img src={pasword_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {state === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot_password">
          Forgot password? <span>click here</span>
        </div>
      )}

      <div className="submit_container">
        <div
          className={state === "Sign Up" ? "submit disable" : "submit"}
          onClick={() => {
            setState("Login");
          }}
        >
          Log In
        </div>
        <div
          className={state === "Login" ? "submit disable" : "submit"}
          onClick={() => {
            setState("Sign Up");
          }}
        >
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
