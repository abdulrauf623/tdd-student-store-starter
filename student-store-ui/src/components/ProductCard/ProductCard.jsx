import * as React from "react"
import "./ProductCard.css"


import {Link} from "react-router-dom"
import ShoppingCart from "../ShoppingCart/ShoppingCart"


export default function ProductCard({product, productId, quantity, shoppingCart, handleAddItemToCart, handleRemoveItemToCart, showDescription}) {






    const description = showDescription ? <div className="product-description">{product.description}</div> : ""

    



  return (

    <div className="product-card">

       


        


        <Link to = {"/products/" + productId}>< img src = {product.image} height = "250px" width= "250px" className="image"/></Link>
        <div className="product-name"> 
        
        <div className="name">{product.name} </div>

        <div className="description">{description}</div>
        
        <button className="add" onClick={() => handleAddItemToCart(productId)}>{"+"}</button>


        <button className="remove" onClick = {() => handleRemoveItemToCart(productId)}>{"-"}</button>


        
         </div>






         <div>



        <div className="product-price"> ${product.price}</div>



        

        <div className="product-quantity">{quantity}</div>


        </div>
        
    </div>
  )
}