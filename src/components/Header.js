import React, { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  const navRef = useRef(null);

  function toggleNav() {
    navRef.current.classList.toggle("active");
  }

  return (
    <section id="header">
      <Link
        to="/"
        style={{ textDecoration: "none", color: "black", fontSize: "2rem" }}
      >
        Unicago
      </Link>
      <div>
        <ul id="navbar" ref={navRef}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          
            {auth ? <li>
            <Link to="/register" onClick={logout}>Log Out</Link></li>
             : 
             <li><Link to="/register" >Login/ Register
              </Link></li>
            }
          
          <li id="lg-bag">
            <i class="far fa-shopping-bag"></i>
          </li>
          <Link to="#" id="close">
            <i class="far fa-times" onClick={toggleNav}></i>
          </Link>
        </ul>
      </div>
      <div id="mobile">
        <Link to="/">
          <i class="far fa-shopping-bag"></i>
        </Link>
        <i id="bar" class="fas fa-outdent" onClick={toggleNav}></i>
      </div>
    </section>
  );
}

export default Navbar;
