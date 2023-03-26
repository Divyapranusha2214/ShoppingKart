import React,{useState} from "react";

export default function Cartcheckout()
{
    const[data,setData]=useState({
        "orderId": 0,
        "orderDate": " ",
        "quantity": 0,
        "address": " ",
        "phone": 0,
        "totalPrice": 0,
        "registrationId": 0,
        "isbn": 0
    });
    const handleInputChange=event => {
        setData({
            ...data,
            [event.target.orderDate]:event.target.value
        });
    };
    const handleSubmit=event=>{
        event.preventDefault();
        console.log('data after submit',data)
        fetch('https://localhost:44322/api/OrderDetails',{
            method:'POST', 
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(Response =>{Response.json();
        console.log(Response.json())})
        .then(data =>{
            console.log('Success',data);
            setData({
                "orderDate": " ",
                "quantity": 0,
                "address": " ",
                "phone": 0,
                "totalPrice": 0,
                "registrationId": 0,
                "isbn": 0  
            });
        })
        .catch(error =>{
            console.log('Error:',error)    
        })
    }
    return(
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-5 pt-5">
                <label htmlFor="orderDate">OrderDate</label>
                <input type="date" name="orderDate"
                value={data.orderDate} className="form-control"
                onChange={handleInputChange}></input>
            </div>
            <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <input type="number" name="quantity"
                value={data.quantity} className="form-control"
                onChange={handleInputChange}></input>
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" name="address"
                value={data.address} className="form-control"
                onChange={handleInputChange}></input>
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone_no</label>
                <input type="number" name="phone"
                value={data.phone} className="form-control"
                onChange={handleInputChange}></input>
            </div>
            <div className="form-group">
                <label htmlFor="totalprice">Totalprice</label>
                <input type="number" name="totalprice"
                value={data.totalPrice} className="form-control"
                onChange={handleInputChange}></input>
            </div>
            <div className="form-group">
                <label htmlFor="registrationId">RegistrationId</label>
                <input type="number" name="registrationId"
                value={data.registrationId} className="form-control"
                onChange={handleInputChange}></input>
            </div>
            <div className="form-group">
                <label htmlFor="isbn">ISBN</label>
                <input type="number" name="isbn"
                value={data.isbn} className="form-control"
                onChange={handleInputChange}></input>
            </div>
            <div class="row">
                <div class="mt-3 text-center">
                    <a href="/successful" class="btn text-decoration-none btn-success fw-bold mx-5">Place Order</a>
                    <a href="/" class="btn text-decoration-none btn-danger fw-bold mx-5">Cancel</a>
                </div>
            </div>
          </form>
    )
}