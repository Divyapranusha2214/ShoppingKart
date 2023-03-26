import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route,Routes,Link} from 'react-router-dom';
import Home from './Project/Home';
import About from './Project/About';
import Contact from './Project/Contact';
import Header from './Project/Header';
import Registration from './Project/Registration';
import LoginForm from './Project/Login';


import DataFromAPI from './Project/Laptops';
import Cart from './Project/Cart';
import Cartcheckout from './Project/Cartcheckout';
import Successful from './Project/OrderSuccessful';
function App() {
  return (
    <div> <Header></Header>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/register" element={<Registration/>}></Route>
      <Route path="/login" element={<LoginForm/>}></Route>
      <Route path="/Laptops" element={<DataFromAPI/>}></Route>
      <Route path="/Cart" element={<Cart/>}></Route>
      <Route path="/cartcheckout" element={<Cartcheckout/>}></Route>
      <Route path="/successful" element={<Successful/>}></Route>
    </Routes>
      
    </div>
  );
}

export default App;
