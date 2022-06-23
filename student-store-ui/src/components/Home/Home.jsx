import * as React from "react"
import "./Home.css"

import ProductGrid from "/src/components/ProductGrid/ProductGrid"


import Welcome from "/src/components/Welcome/Welcome"

export default function Home({products, handleItemToCart,handleRemoveItemToCart, shoppingCart}) {
  return (
    <div className="home">
      <Welcome />


      <ProductGrid products = {products} handleItemToCart = {handleItemToCart} handleRemoveItemToCart = {handleRemoveItemToCart} shoppingCart = {shoppingCart}/>
    </div>
  )
}
