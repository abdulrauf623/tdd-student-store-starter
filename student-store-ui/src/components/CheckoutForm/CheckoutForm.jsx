import * as React from "react"
import "./CheckoutForm.css"
import { useState } from "react";


export default function CheckoutForm({isOpen, setCheckoutForm, products,   isClicked, setShoppingCart,
  setIsClicked, shoppingCart, checkoutForm,handleOnCheckoutFormChange, handleOnSubmitCheckoutForm}) {



    function changeBack(){


     setIsClicked(false)

     setShoppingCart([])
     setCheckoutForm({"email" : "", "name" : ""})


    }

  let error;

  let subtotal  = 0

 if (checkoutForm.name.length == 0) {

   error = <div className="checkout-form"> Enter a valid name</div>

 }

 if (checkoutForm.email.length == 0){


  error = <div className="checkout-form"> Enter a valid email</div>
 }


 if (shoppingCart.length == 0){


  error = <div className="checkout-form"> Empty Cart, add items to checkout</div>
 }


 const mainss = !isClicked ? "" :
 <div> Receipt</div>

 const names = !isClicked  ? "" :
 <div> Showing Receipt for {checkoutForm.name} available at {checkoutForm.email}</div>





 const mains = !isClicked ? "" :
 
 shoppingCart.map((item) => {

  const name = products.find((product) => {

    return product.id == item.id
  })

  const pp = name.price

  const qq = item.quantity

  subtotal += parseFloat(pp) * parseFloat(qq)

  return  <li> {item.quantity } total {name.name} purchased at a cost of ${name.price} for a total of ${name.price * item.quantity}</li>


 })


 const total = (subtotal + parseFloat(subtotal * 0.0875)).toFixed(2)

 const subtotals = !isClicked ? "" : 

 <div>
  <li> Before taxes, the subtotal was ${subtotal} </li>
  <li> After taxes and fees were applied, the total comes out to ${total}</li>
  <button onClick = {changeBack}> Reorder</button>
 </div>




  return (
    <div className="checkout-form">


      <div className="email"> Email</div>

      <input className="checkout-form-input" type={"email"} name = {"email"} value = {checkoutForm? checkoutForm.email : ""} placeholder = {`student@codepath.org`} onChange = {handleOnCheckoutFormChange}/>



      <div className="name"> Name</div>

      <input className="checkout-form-input" type={"text"} name = {"name"} value = {checkoutForm? checkoutForm.name : ""} placeholder = {"Student Name"} onChange = {handleOnCheckoutFormChange}/>



      <button className= "checkout-button" onClick = {() => handleOnSubmitCheckoutForm(checkoutForm, shoppingCart)}> Checkout</button>


      {/* {error} */}

      {mainss}
      {names}
      {mains}
      {subtotals}




        
    </div>
      
  )
}