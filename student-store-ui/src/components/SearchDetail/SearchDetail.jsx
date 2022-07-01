import * as React from "react";
import "./SearchDetail.css";

import { useState, useEffect } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

import ProductGrid from "/src/components/ProductGrid/ProductGrid";

export default function SearchDetail({
  handleAddItemToCart,
  handleRemoveItemToCart, shoppingCart
}) {

    const [products, setProducts] = useState([])



  useEffect(async () => {
    const url = `https://codepath-store-api.herokuapp.com/store/`;

    const finalURL = url

    const response = await axios.get(finalURL);

    console.log("Response: ", response.data)




    setProducts(response.data.products)


    console.log("Products from everything", products)

  }, []);


  function searchResult(string){



    const category = products.filter((product) => {
        

        return product.category === string



    })



    console.log("Category kinda lol", category)





   return <ProductGrid products = {category}  handleAddItemToCart = {handleAddItemToCart} handleRemoveItemToCart = {handleRemoveItemToCart} shoppingCart = {shoppingCart}/>
        
        








  }




  return (
    <div className="search-detail">

        <button className="category" onClick={() => searchResult('food')}> Category is the thing that i want it to</button>
      
    </div>
  );
}
