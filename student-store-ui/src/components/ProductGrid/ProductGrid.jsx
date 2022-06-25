import * as React from "react"
import "./ProductGrid.css"

import ProductCard from "/src/components/ProductCard/ProductCard"

export default function ProductGrid({products, handleAddItemToCart, handleRemoveItemToCart, shoppingCart}) {
    



  return (
    <div className="product-grid">
      
      
      
      {  products.map((product) => {


       const prod = shoppingCart.find((item) => item.id == product.id)


       const quantity = prod ? prod.quantity : 0

       return <ProductCard showDescription = {false} product = {product} productId = {product.id} quantity = {quantity} handleAddItemToCart = {handleAddItemToCart} handleRemoveItemToCart = {handleRemoveItemToCart} shoppingCart = {shoppingCart}/>



})

}
    </div> 
  )
}
