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
import SearchDetail from "../SearchDetail/SearchDetail";

export default function App() {
  const [products, setProducts] = useState([]);

  const [isFetching, setIsFetching] = useState(false);

  const [error, setError] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const [isClicked, setIsClicked]  = useState(false)

  const [shoppingCart, setShoppingCart] = useState(
    []
  ); /*should contain an array of items that have item id and and Quantity representing the number of items purchased*/

  const [checkoutForm, setCheckoutForm] =
    useState({"email" : "", "name" : ""}); /*I am guessing this will contain an object that has the users information */


  const [changeCategory, setChangeCategory] = useState("")


  function changeToClothing(){


    setChangeCategory("clothing")



  }


  function changeToTech(){


    setChangeCategory("tech")
  }


  function changeToFood(){


    setChangeCategory("food")
  }


  function changeToAccessories(){


    setChangeCategory("accessories")
  }

  function changeToDefault(){


    setChangeCategory("")
  }



  useEffect(async () => {
    const response = await axios.get(
      "http://localhost:3001/store/"
    );

    console.log("Response Data: ", response.data);

    if (response.data.products) {

      if (changeCategory.length < 1){
      setProducts(response.data.products);

      }

      else{
        const filteredproducts = response.data.products.filter((product) => { return product.category == changeCategory})


        setProducts(filteredproducts)


      }
    } else {
      setError("Error, could not find any products");
    }
  }, [changeCategory]);

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
        const newShoppingCart = [...shoppingCart]

      newShoppingCart.forEach(( item) => {

        if (item.id == productId){
          
          item.quantity -= 1;
        }



        setShoppingCart(newShoppingCart)



      });
      }
    }
  }

  function handleOnCheckoutFormChange(change) {
    let userInformation = {...checkoutForm}

    userInformation[change.target.name] = change.target.value

    setCheckoutForm(userInformation);
  }

  async function handleOnSubmitCheckoutForm(checkoutForm, shoppingCart) {


    try {

     setIsClicked(true)
    const response = await axios.post(
      "http://localhost:3001/store/",

      {
        "user" : {"name" : checkoutForm.name, "email" : checkoutForm.email},

        "shoppingCart": shoppingCart,
      }
    );


    console.log("Output from last post request", response.data)

    }

    catch(error){


      console.log(error)
    }


  }

  console.log("Products: ", products);

  console.log("Error: ", error);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
        <Sidebar setCheckoutForm={setCheckoutForm} setShoppingCart={setShoppingCart} isClicked = {isClicked} setIsClicked = {setIsClicked} isOpen={isOpen} handleOnToggle={handleOnToggle} products = {products} shoppingCart = {shoppingCart} checkoutForm = {checkoutForm} handleOnCheckoutFormChange = {handleOnCheckoutFormChange} handleOnSubmitCheckoutForm = {handleOnSubmitCheckoutForm}/>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                changeToDefault = {changeToDefault}
                changeToAccessories = {changeToAccessories}
                changeToClothing = {changeToClothing}
                changeToFood = {changeToFood}
                changeToTech = {changeToTech}
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
