import React from "react";
import {NavLink} from "react-router-dom";


function Header()
{
    return(
        <div>
     
    
<nav data-aos="slide-down" data-aos-duration="1000" class="navbar navbar-expand-md navbar-light fixed-top bg-white px-sm-5 shadow py-3">

            <div class="container-fluid">
              <a class="navbar-brand brand fw-bold" style={{color: 'black'}} href="/home">LaptopsKart</a>
          
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse d-md-flex justify-content-end navbar-collapse " id="navbarTogglerDemo02">
                <ul class="navbar-nav navigations">
                  <li class="nav-item "> <a class="nav-link active" aria-current="project" href="/home">Home</a></li>
                 
                   <li class="nav-item "> <a class="nav-link" aria-current="project" href="/about">About</a></li>
                   <li class="nav-item "> <a class="nav-link" aria-current="project" href="/contact">Contact</a></li>
                   <li class="nav-item "> <a class="nav-link" aria-current="project" href="/register">Register</a></li>
                   
                  <li class="nav-item "> <a class="nav-link" aria-current="project" href="/login">Login</a></li>
                
                  <li class="nav-item "> <a class="nav-link" aria-current="project" href="/Laptops">Laptops</a></li>
                  <li class="nav-item "> <a class="nav-link" aria-current="project" href="/Cart">Cart</a></li>
          
                 
                </ul>
                
              </div>
            </div>
          </nav>
        
</div>
        
    )
}
export default Header;