import * as React from "react"
import "./Home.css"

import ProductGrid from "/src/components/ProductGrid/ProductGrid"


import Welcome from "/src/components/Welcome/Welcome"

export default function Home({products, handleAddItemToCart,handleRemoveItemToCart, shoppingCart}) {
  return (
    <div className="home">
      <Welcome />


      <ProductGrid products = {products} handleAddItemToCart = {handleAddItemToCart} handleRemoveItemToCart = {handleRemoveItemToCart} shoppingCart = {shoppingCart}/>
    </div>
  )
}
