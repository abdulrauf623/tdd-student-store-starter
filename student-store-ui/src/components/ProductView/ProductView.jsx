import * as React from "react"
import "./ProductView.css"


import Welcome from "/src/components/Welcome/Welcome"

import ProductCard from "/src/components/ProductCard/ProductCard"

export default function ProductView({product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart, shoppingCart}) {



  return (
    <div className="product">


        <h1 className="product-id">Product # {productId}</h1>


        <ProductCard showDescription = {true} product = {product} productId = {productId} quantity = {quantity} handleAddItemToCart = {handleAddItemToCart} handleRemoveItemToCart = {handleRemoveItemToCart} shoppingCart = {shoppingCart}/>


    </div>
  )
}