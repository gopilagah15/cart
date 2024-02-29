import React from 'react'
import Product from './Product.js'

export default function ProductList(props) {
    console.log(props)
  return ( 
    props.productList.length<=0 ? 
    <h1>  No product list </h1>:
      props.productList.map((product,i)=>{
return <Product product = {product} key={i} increment = {props.increment} decrement = {props.decrement} index= {i} removeitem={props.removeitem}/>
      })
      ) 
  
}


