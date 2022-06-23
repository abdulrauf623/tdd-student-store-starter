import * as React from "react";
import "./Sidebar.css";

import ShoppingCart from "/src/components/ShoppingCart/ShoppingCart";
import CheckoutForm from "/src/components/CheckoutForm/CheckoutForm";

export default function Sidebar({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
}) {
  const display1 = isOpen ? <ShoppingCart /> : "";

  const display2 = isOpen ? <CheckoutForm /> : "";

  return (
    <section className="sidebar">
      <p>Sidebar</p>
      <button
        className="toggle-button"
        onClick={() => handleOnToggle()}
      ></button>
      display1 display2
    </section>
  );
}
