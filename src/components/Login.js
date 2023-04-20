import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Contact.css";

function Login() {
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
const navigate = useNavigate()
const [email, setEmail] = useState("");

const [password, setPassword] = useState("");
const loginHandler = async () =>{
    let result = await fetch("http://localhost:5000/login",{
        method: "post",
        body: JSON.stringify({email, password}),
        headers:{
            'Content-type': "application/json"
        }

    })
    result = await result.json()
    console.warn(result)
    if(result.auth){
        localStorage.setItem("user",JSON.stringify(result.user))
        localStorage.setItem("token", JSON.stringify(result.auth))
        navigate("/")

    }
    else{
        alert("NO ERROR")
    }

} 

  return (
    <section className="section-signup container">
      <h2>Login</h2>
      <form className="signup-form">
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
        <button onClick={loginHandler}>Login</button>
      </form>
      <br />
      <span>
        New User? <Link to="/register">Register</Link>
      </span>
    </section>
  );
}

export default Login;
