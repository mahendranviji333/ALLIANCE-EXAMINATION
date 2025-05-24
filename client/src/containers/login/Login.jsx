import React from "react";
import logo from "./../../assets/au-online.png";
import { CommonInput, CtaButton } from "../../components";
import "./login.css";

const inputField = ["Email ID", "Password"];

const Login = () => {
  return (
    <div className="user-login">
      <div className="logo primary-background">
        <img src={logo} alt="ALLIANCE UNIVERSITY ONLINE-logo" />
      </div>
      <div className="login-form">
        <h1 className="title-heading">User Login</h1>
        <div className="input-fields">
          {inputField.map((item) => (
            <CommonInput placeholderText={item} />
          ))}
        </div>
        <a href="/">
          <CtaButton text="Login" />
        </a>
      </div>
    </div>
  );
};

export default Login;
