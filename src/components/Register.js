import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const collectData = async () => {
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    console.log(result)
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth))
    if (result) {
      navigate("/");
    }
  };
  return (
    <section className="section-signup container">
      <h2>Register</h2>
      <form className="signup-form">
        <div className="form-group">
          <input
            className="input-box"
            type="text"
            value={name}
            name=""
            id=""
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <input
            className="input-box"
            type="text"
            value={email}
            name=""
            id=""
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <input
            className="input-box"
            type="password"
            value={password}
            name=""
            id=""
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </div>
        <button onClick={collectData}>Signup</button>
      </form>
      <br/>
      <span>Already an User please <Link to="/login">Login</Link></span>
    </section>
  );
}

export default Register;
