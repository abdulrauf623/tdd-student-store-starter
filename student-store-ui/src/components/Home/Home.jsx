import * as React from "react"
import "./Home.css"


import Welcome from "/src/components/Welcome/Welcome"

export default function Home() {
  return (
    <div className="home">
      <Welcome/>
      <p>Home</p>
    </div>
  )
}
