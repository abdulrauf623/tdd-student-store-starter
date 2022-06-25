import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";

import axios from "axios";

import ProductDetail from "/src/components/ProductDetail/ProductDetail";

import NotFound from "/src/components/NotFound/NotFound";

export default function App() {
  const [products, setPrducts] = useState([]);

  const [isFetching, setIsFetching] = useState(false);

  const [error, setError] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const [shoppingCart, setShoppingCart] = useState(
    []
  ); /*should contain an array of items that have item id and and Quantity representing the number of items purchased*/

  const [checkoutForm, setCheckoutForm] =
    useState(); /*I am guessing this will contain an object that has the users information */

  useEffect(async () => {
    const response = await axios.get(
      "https://codepath-store-api.herokuapp.com/store/"
    );

    console.log("Response Data: ", response.data);

    if (response.data.products) {
      setPrducts(response.data.products);
    } else {
      setError("Error, could not find any products");
    }
  }, []);

  function handleOnToggle() {
    setIsOpen(!isOpen);
  }

  function handleAddItemToCart(productId) {
    //

    let item = shoppingCart.find((element) => element.id == productId);


    if (item) {



      const newShoppingCart = [...shoppingCart]

      newShoppingCart.forEach(( item) => {

        if (item.id == productId){
          
          item.quantity += 1;
        }



        setShoppingCart(newShoppingCart)



      });
    } else {


      item = {
        id: productId,

        quantity: 1,
      };

      setShoppingCart(shoppingCart.concat(item));
    }
  }

  function handleRemoveItemToCart(productId) {
    let item = shoppingCart.find((element) => element.id == productId);

    if (item) {
      if (item.quantity == 1) {

        const newCart = shoppingCart.filter((prod) => {


          return prod.id != productId


        })


        setShoppingCart(newCart)

        console.log("ShoppingCart: ", shoppingCart)




      } else {
        item.quantity -= 1;
      }
    }
  }

  function handleOnCheckoutFormChange(names, values) {
    let userInformation = {
      name: names,

      value: values,
    };

    setCheckoutForm(userInformation);
  }

  async function handleOnSubmitCheckoutForm(checkoutForm, shoppingCart) {
    const response = axios.post(
      "https://codepath-store-api.herokuapp.com/store",
      {
        user: checkoutForm,

        shoppingCart: shoppingCart,
      }
    );
  }

  console.log("Products: ", products);

  console.log("Error: ", error);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
        <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle} products = {products} shoppingCart = {shoppingCart} checkoutForm = {checkoutForm} handleOnCheckoutFormChange = {handleOnCheckoutFormChange} handleOnSubmitCheckoutForm = {handleOnSubmitCheckoutForm}/>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                  shoppingCart={shoppingCart}
                />
              }
            />

            <Route path="/products/:productId" element={<ProductDetail  shoppingCart = {shoppingCart} handleAddItemToCart = {handleAddItemToCart} handleRemoveItemToCart = {handleRemoveItemToCart}/>} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
