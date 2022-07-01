import * as React from "react"
import "./ShoppingCart.css"


export default function ShoppingCart({isOpen, products, shoppingCart }) {


    let subtotal = 0;

    let subs;


    let total = 0;



   









    const show = shoppingCart.length === 0 ? <div className="no-show" > There is nothing in the shopping cart at the moment. Add to the cart</div>:

    

        (shoppingCart.map((item) => {

            console.log("Item in shoppng cart: ", item)



            console.log("item's id: ", item.id)

            console.log("Products: ", products)


            let product = products.find(element => { 
                
                console.log("element and item: ",element, item)
                return element.id == item.id})






            console.log("Product: ", product)


            subtotal += (item.quantity * product.price)







            
            
            return (<ul className="cart-product-name">
                
               <li className="product-name"> {product.name} </li>  
                <li  className="product-quantity">{item.quantity}</li> 
                <li className="product-unit-price">{product.price} </li>
               <li className="price"> {(item.quantity * product.price).toFixed(2)} </li>




            


                </ul>

              )



                
                
                
                

                
           
            
            
            

            



        })


        


       
        
        
        )

       

        console.log("Show: ", show)



        subs = (subtotal *0.0875).toFixed(2)


         total = parseFloat(subs) + parseFloat(subtotal)



         total = total.toFixed(2)




        let me = <ul className="total">
        
        <ul className="subtotal"> 
 
         <li className="sub"> Subtotal</li>
 
         <li className="value"> {subtotal.toFixed(2)}</li>
        
        </ul>
 
        <ul className="subtotal">
            
            <li className="sub"> Taxes</li>


         


            <li className="value"> {subs}</li>
            
            
            </ul>


            <ul className="subtotal">

                <li className="sub"> Total</li>

                
                <li className="value">{ total} </li>
            </ul>
        
        
        
         
         </ul>
        



    





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



        {shoppingCart.length != 0 ? me : ""}


        



    </div>
  )
}