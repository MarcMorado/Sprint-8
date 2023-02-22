import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Styles.css";

export default function LogIn() {
  const emailCheck = localStorage.getItem("email");
  const passwordCheck = localStorage.getItem("password");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let errorEmail = true;
  let errorPassword = true;

  const handleSubmit = (e) => {
    console.log("email check", emailCheck);
    console.log("email act", email);
    e.preventDefault();
    setPassword("");
    setEmail("");
    if (email === emailCheck) {
      console.log("holis");
      localStorage.setItem("email", email);
      errorEmail = false;
    }
    if (password === passwordCheck) {
      localStorage.setItem("password", password);
      errorPassword = false;
    }
    console.log(errorEmail, errorPassword);
    if (errorEmail === false && errorPassword === false) {
      navigate("/home");
    }
  };

  const gotoSingUpPage = () => navigate("/singup");

  return (
    <div className="login-container">
      <img
        className="img-alien"
        src="https://lumiere-a.akamaihd.net/v1/images/tentpolehero-foundry-desktop-v1_29536776.jpeg?region=0,0,1600,600"
        alt="Alien holding lightsaber"
      />
      <div className="login-component">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className="login-Btn">SIGN IN</button>
          <p>
            Don't have an account?{" "}
            <span className="link" onClick={gotoSingUpPage}>
              Sing up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
