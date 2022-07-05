import * as React from "react"
import "./Home.css"

import ProductGrid from "/src/components/ProductGrid/ProductGrid"


import Welcome from "/src/components/Welcome/Welcome"


import SearchDetail from "../SearchDetail/SearchDetail"

export default function Home({changeToDefault, changeToAccessories, changeToFood, changeToClothing, changeToTech,  products, handleAddItemToCart,handleRemoveItemToCart, shoppingCart}) {



  const categories = <div className="categories">


    <li onClick={changeToDefault}> All Categories</li>

    <li onClick={changeToClothing}>  Clothing</li>

    <li  onClick={changeToFood}> Food</li>


    <li onClick={changeToAccessories}> Accessories</li>

    <li onClick={changeToTech}> Tech </li>


  </div>


  return (
    <div className="home">
      <Welcome />


      {categories}



      {/* <SearchDetail handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart = {handleRemoveItemToCart} shoppingCart = {shoppingCart}/> */}



      <ProductGrid products = {products} handleAddItemToCart = {handleAddItemToCart} handleRemoveItemToCart = {handleRemoveItemToCart} shoppingCart = {shoppingCart}/>
    </div>
  )
}
