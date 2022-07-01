import * as React from "react"
import "./Home.css"

import ProductGrid from "/src/components/ProductGrid/ProductGrid"


import Welcome from "/src/components/Welcome/Welcome"


import SearchDetail from "../SearchDetail/SearchDetail"

export default function Home({products, handleAddItemToCart,handleRemoveItemToCart, shoppingCart}) {
  return (
    <div className="home">
      <Welcome />



      <SearchDetail handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart = {handleRemoveItemToCart} shoppingCart = {shoppingCart}/>



      <ProductGrid products = {products} handleAddItemToCart = {handleAddItemToCart} handleRemoveItemToCart = {handleRemoveItemToCart} shoppingCart = {shoppingCart}/>
    </div>
  )
}
