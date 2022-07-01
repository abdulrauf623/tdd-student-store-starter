import * as React from "react"
import "./ProductCard.css"


import {Link} from "react-router-dom"
import ShoppingCart from "../ShoppingCart/ShoppingCart"


export default function ProductCard({product, productId, quantity, shoppingCart, handleAddItemToCart, handleRemoveItemToCart, showDescription}) {






    const description = showDescription ? <div className="product-description">{product.description}</div> : ""



    const quant = quantity === 0 ? "" : <div className="product-quantitys">{quantity}</div>

    



  return (

    <div className="product-card">

       


        


        <Link to = {"/products/" + productId}>< img src = {product.image} height = "250px" width= "300px" className="image"/></Link>
        <div className="product-names"> 
        
        <div className="names">{product.name} </div>

        <div className="description">{description}</div>

        <div className="product-prices"> ${product.price}</div>


        <div className="buttons"> 
        
        
         <button className="add" onClick={() => handleAddItemToCart(productId)}>{"+"}</button>



         


         


          <button className="remove" onClick = {() => handleRemoveItemToCart(productId)}>{"-"}</button>

          </div>




         
        
        

        


        </div>


        {quant}
        
    </div>
  )
}