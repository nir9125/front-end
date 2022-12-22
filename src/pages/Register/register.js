import "./register.css";
import axios from "axios";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);
    setError(false);
    try {
      const res = await axios.post("https://ecommerce2-ugb8.onrender.com/api/v1/signup", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
      console.log(res.data);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton">Register</button>
      </form>

      <button type="submit" className="registerLoginButton">
        <Link className="link" to="/login">
          login
        </Link>
      </button>
      {error && <span> Something Went wrong! </span>}
    </div>
  );
}
