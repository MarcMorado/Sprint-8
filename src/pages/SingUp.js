import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Styles.css";

export default function SingUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPassword("");
    setEmail("");
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    if (email !== null && password !== null) {
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <img
        className="img-alien"
        src="https://lumiere-a.akamaihd.net/v1/images/the-bad-batch-tph-desktop_30a118ba.jpeg?region=0,0,1600,600"
        alt="Alien holding lightsaber"
      />
      <div className="login-component">
        <h2 className="login-title">SING UP</h2>
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
          <button className="login-Btn">SIGN UP</button>
        </form>
      </div>
    </div>
  );
}
