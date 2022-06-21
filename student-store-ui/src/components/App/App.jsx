import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"

import ProductDetail from "/src/components/ProductDetail/ProductDetail"


import NotFound from "/src/components/NotFound/NotFound"

export default function App() {
  return (
    <div className="app">

        
      <BrowserRouter>
        <main>


        <Navbar />
        
          <Routes>


            <Route path="/" element= {<Home />} />

            <Route path = "/products/:productId" element = {<ProductDetail/>} />

            < Route path = "*" element = {<NotFound/>} />




          </Routes>
          
          <Sidebar />
          
        </main>
      </BrowserRouter>
    </div>
  )
}
