import React,{useState,useEffect} from "react";

import { Link } from "react-router-dom";
function DataFromAPI()
{
    const[data,setData]=useState([]);
    
    useEffect(() => {
        fetch("https://localhost:44340/api/Laptops")
        .then(response =>{return response.json()})
        .then(data => setData(data))
        console.log(data);
    },[]);

    const addToCart = (item) => {
      let cartItems = [];
  const existingCartData = localStorage.getItem('cart');
  if (existingCartData) {
    cartItems = JSON.parse(existingCartData);
  }
  cartItems.push(item);
  localStorage.setItem('cart', JSON.stringify(cartItems));
  alert('Product added to cart');
    };
    return (
        
      
    <div>
    <div style={{ display: 'flex',gap: '30px' ,paddingTop: '90px' }}>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {data.map((item, index) => (
      <div
        class="card"
        style={{
          width: 300,
          marginRight: '20px',
          marginBottom: '20px',
          flex: '1 0 22%',
        }}
      >
        <img src={item.imageUrl} style={{ height: "250px" }} class="card-img-top" alt="..." />
        <div class="card-body">
          <h3 class="card-id">Id:{item.id}</h3>
          <h4 class="card-name">Name:{item.name}</h4>
          <h4 class="card-unitPrice"> Price: Rs.{item.unitPrice}</h4>
          <h4 class="card-discount"> Discount: Rs.{item.discount}</h4>
          <h4 class="card-quantity"> Quantity: {item.quantity}</h4>
        
          <button
                  class="btn btn-success"
                  onClick={() => addToCart(item)}
                >
                  Add to cart
                </button>
        </div>
        {(index + 1) % 4 === 0 && <div style={{ flexBasis: '100%', height: '0' }} />}
      </div>
    ))}
  </div>
  </div>
</div>
    )
}
export default  DataFromAPI;