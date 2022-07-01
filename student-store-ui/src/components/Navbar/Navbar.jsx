import * as React from "react";
import "./Navbar.css";

import {Link} from "react-router-dom"

import Logo from "/src/components/Logo/Logo";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar-items">
        <Logo className = "logo" />
       <Link to = "/"><li className="navbar-item"> Home </li></Link>
        <li className="navbar-item"> About</li>
        <li className="navbar-item"> Contact Us</li>
        <li className="navbar-item"> Buy Now</li>
      </ul>
    </div>
  );
}
