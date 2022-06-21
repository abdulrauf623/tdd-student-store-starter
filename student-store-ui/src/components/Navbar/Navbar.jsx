import * as React from "react"
import "./Navbar.css"

import Logo from "/src/components/Logo/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">


      <div id="navbar">
      {/* <p>Navbar</p> */}

      <Logo />  
      <span> Home </span>
      <span> About</span>
      <span> Contact Us</span>
      <span> Buy Now</span>

        

      </div>  
    </nav>
  )
}