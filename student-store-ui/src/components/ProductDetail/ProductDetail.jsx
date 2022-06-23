import * as React from "react"
import "./ProductDetail.css"


import Welcome from "/src/components/Welcome/Welcome"

import { useState } from "react"

import { useParams } from "react-router-dom"

import ProductView from "/src/components/ProductView/ProductView"

export default function ProductDetail({handleItemToCart, handleRemoveItemToCart}) {

const [product, setProduct] = useState()



let { productId } = useParams();


  return (
    <div className="product-detail">
      <ProductView />
      <p>{productId}</p>
      <p>Product Detail</p>
    </div>
  )
}
