import * as React from "react";
import "./ProductDetail.css";

import Welcome from "/src/components/Welcome/Welcome";

import { useState, useEffect } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

import ProductView from "/src/components/ProductView/ProductView";

export default function ProductDetail({
  handleAddItemToCart,
  handleRemoveItemToCart, shoppingCart
}) {
  const [product, setProduct] = useState();

  let { productId } = useParams();
  


  const isLoading = !Boolean(product)


  const whenLoading = ""

  // const prod = shoppingCart.find((element) => element.id === productId)

  // console.log("Prod: ", prod)


  // console.log("Quantity: ")

  const quantity = 0

  const whenLoaded = <ProductView shoppingCart = {shoppingCart} product = {product} productId = {productId} quantity = {quantity} handleAddItemToCart = {handleAddItemToCart} handleRemoveItemToCart = {handleRemoveItemToCart}/>


  const element = isLoading ?  <h1> Loading...</h1> :
  
  whenLoaded



  useEffect(async () => {

    console.log("ProductId: ", productId)
    const url = `https://codepath-store-api.herokuapp.com/store/`;

    const finalURL = url + productId;

    const response = await axios.get(finalURL);

    console.log("Response: ", response.data)




    setProduct(response.data.product)

  }, []);




  return (
    <div className="product-detail">
      {element}
    </div>
  );
}
