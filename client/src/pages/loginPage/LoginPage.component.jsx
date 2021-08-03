import React, { useRef, useState } from "react";
import "./login-page.styles.scss";
const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="email or phone number" />
          <input type="password" placeholder="password" />
          <button className='login-button'>Sign In</button>
          <span>
            New to Netflix? <b>Sign up now</b>
          </span>
          <small>
            This page is prortected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn More</b>
          </small>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
