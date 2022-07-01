import * as React from "react"
import "./CheckoutForm.css"


export default function CheckoutForm({isOpen, shoppingCart, checkoutForm,handleOnCheckoutFormChange, handleOnSubmitCheckoutForm}) {



  console.log("CheckoutForm", checkoutForm)

  console.log("shoppingCart", shoppingCart)



  return (
    <div className="checkout-form">



      <input className="checkout-form-input" type={"email"} name = {"email"} value = {checkoutForm? checkoutForm.email : ""} placeholder = {`student@codepath.org`} onChange = {handleOnCheckoutFormChange}/>



      <input className="checkout-form-input" type={"text"} name = {"name"} value = {checkoutForm? checkoutForm.name : ""} placeholder = {"Student Name"} onChange = {handleOnCheckoutFormChange}/>



      <button className= "checkout-button" onClick = {() => handleOnSubmitCheckoutForm(checkoutForm, shoppingCart)}> Checkout</button>




        
    </div>
      
  )
}