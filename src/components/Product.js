import React from 'react'

export default function Product(props) {
     
  return (
    <div className='row mt-3'>
      <div className="col-5">
        <h2>{props.product.name}</h2><span className="badge text-bg-secondary">{props.product.price}</span> 
      </div>
      <div className="col-3">
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary" onClick={()=>{props.decrement(props.index)}}>-</button>
        <button type="button" className="btn btn-primary">{props.product.quantity}</button>
        <button type="button" className="btn btn-primary" onClick={()=>{props.increment(props.index)}}>+</button>
        </div>
      </div>
      <div className="col-2">
        <h2>{props.product.quantity*props.product.price}</h2>
      </div>
      <div className="col-2">
     <button onClick={ ()=>{return props.removeitem(props.index)}} type= 'button' className="  btn btn-danger">Remove</button>
     </div>
    </div>
  )
}
