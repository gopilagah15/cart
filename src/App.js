import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import AddItem from './components/AddItem';

function App() { 
  const products = [
    {
      price : 100000,
      name : 'IPHONE 10S MAx',
      quantity : 0,
    },
    {
      price : 90000,
      name : 'Redmi note  MAx',
      quantity : 0,
    }
  ]

  let [productList , setProductList] = useState(products);
  let [totalAmount , setTotalAmount] = useState(0);
  // let [reset , setReset] = useState(0);
 const  increment=(index)=>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    // let newReset = reset;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount)
    setProductList(newProductList);
  }
 const  decrement=(index)=>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if(newProductList[index].quantity>0)
    {
      newProductList[index].quantity--;
    newTotalAmount -= newProductList[index].price;
  }
  setTotalAmount(newTotalAmount)
    setProductList(newProductList);
  }
  const onReset = () =>{
    let newProductList = [...productList];
    newProductList.map((products)=>{
      return products.quantity = 0;
    })
    setProductList(newProductList);
    setTotalAmount(0);
  }
  const removeitem =(index) =>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity*newProductList[index].price;
    newProductList.splice(index, 1)
    console.log(newProductList)
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);

  };
  const addItem = (name,price) =>{
    let newProductList = [...productList];
    newProductList.push({price: price, name: name , quantity: 0});
    setProductList(newProductList);
  }
  return (
   <>
   <Navbar/>
   <main className="container mt-5">
    <AddItem addItem = {addItem}/>
   <ProductList productList = {productList} increment = {increment} decrement = {decrement} removeitem={removeitem} />
   </main>
   <Footer totalAmount={totalAmount} onReset={onReset} />
   </>
  );
}

export default App;
