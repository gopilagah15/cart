import React, { Component } from 'react'

export class AddItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            price:0
        }
    }
    
  render() {
    return (
      <div>
        <form  className="row align-item-center " onSubmit={(e)=>{
            e.preventDefault();
            this.props.addItem(this.state.name,JSON.parse(this.state.price))}}> 
  <div className="col-md-4">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name='name' onChange ={(e) =>{
        this.setState({name:e.currentTarget.value});}} value={this.state.name} aria-describedby="emailHelp"/>
     </div>
   <div className="col-md-4">
    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
    <input type="number" className="form-control" id="price" name='price' onChange ={(e) =>{
        this.setState({price:e.currentTarget.value});}} value={this.state.price} />
  </div>
 
  
  <button   type="submit" className="btn btn-primary my-3 col-md-4"   >Add to cart</button>
</form> 
      </div>
    )
  }
}

export default AddItem
