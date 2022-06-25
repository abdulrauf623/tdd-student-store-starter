import * as React from "react";
import "./Sidebar.css";

import ShoppingCart from "/src/components/ShoppingCart/ShoppingCart";
import CheckoutForm from "/src/components/CheckoutForm/CheckoutForm";

import { useEffect } from "react";

export default function Sidebar({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
}) {




  
  const display1 = isOpen ? <ShoppingCart isOpen = {isOpen} shoppingCart = {shoppingCart} products = {products}/> : "";

  const display2 = isOpen ? <CheckoutForm isOpen = {isOpen} checkoutForm = {checkoutForm} shoppingCart = {shoppingCart} handleOnCheckoutFormChange = {handleOnCheckoutFormChange} handleOnSubmitCheckoutForm = {handleOnSubmitCheckoutForm} /> : "";

  const arrow = isOpen ? "<---" : "➡️"

  console.log("IsOpen: ", isOpen)
  console.log("shopping cart", shoppingCart)

  const cart = isOpen ? "" : "🛒"

  return (
    <section className="sidebar">
      <p>Sidebar</p>
      <button
        className="toggle-button"
        onClick={() => handleOnToggle()}
      >{arrow}</button>
      <div> {cart} </div>
      {display1} {display2}
    </section>
  );
}
