import * as React from "react"
import "./Navbar.css"

import Logo from "/src/components/Logo/Logo"

export default function Navbar() {
  return (
    <div className="navbar">

      

      <Logo />  
      <span> Home </span>
      <span> About</span>
      <span> Contact Us</span>
      <span> Buy Now</span>
      
    </div>
      
  )
}