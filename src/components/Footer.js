import React from 'react'

export default function Footer(props) {
  return (
    <div className="container">
    <div className='row position fixed-bottom'>
     <button className='btn btn-danger col-2' onClick={()=>{props.onReset()}}>Reset</button>
     <div className='col-8 bg-dark text-white text-center'>
        <h2>{props.totalAmount}</h2>
     </div>
     <button className="btn btn-primary col-2">Pay Now</button>
    </div>
    </div>
  )
}
