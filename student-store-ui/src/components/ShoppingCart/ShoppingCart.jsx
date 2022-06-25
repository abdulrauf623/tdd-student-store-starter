import * as React from "react"
import "./ShoppingCart.css"


export default function ShoppingCart({isOpen, products, shoppingCart }) {










    const show = shoppingCart.length === 0 ? <div className="no-show" > There is nothing in the shopping cart at the moment. Add to the cart</div>:

    

        shoppingCart.map((item) => {

            console.log("Item in shoppng cart: ", item)



            console.log("item's id: ", item.id)

            console.log("Products: ", products)


            let product = products.find(element => { 
                
                console.log("element and item: ",element, item)
                return element.id == item.id})






            console.log("Product: ", product)







            
            
            return <ul className="cart-product-name">
                
               <li className="product-name"> {product.name} </li>  
                <li  className="product-quantity">{item.quantity}</li> 
                <li className="product-unit-price">{product.price} </li>
               <li className="price"> {(item.quantity * product.price).toFixed(2)} </li>
                </ul>
            
            
            
            

            



        })

        console.log("Show: ", show)



    





  return (
    <div className="shopping-cart">


        <div className="shop">Shopping Cart  🛒
        </div>

        <ul className="labels">

        <li className="name-label">Name</li>
        <li className="quantity-label">Quantity</li>
        <li className="u-price-label"> Unit Price</li>
        <li className="price-label"> Price</li>

        </ul>

        
        {show}


        



    </div>
  )
}