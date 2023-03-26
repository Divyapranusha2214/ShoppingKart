import React from "react";
export default function Home()
{
    return(
        <div class="mt-5 pt-5">
            <div
        style={{
          height: '85vh',
          width: '100%',
          overflow: 'hidden',
          background: 'url("images/Laptop.jpg")',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '3.5rem',
            color: 'Pink',
            backgroundColor: 'rgba(0, 0, 0, 0.0)',
            padding: '15px',
            fontWeight: 'bold',
          }}
       >
          Welcome to LaptopsKart
        </h1>

        
       
        {/* <br/>

        <p style={{fontSize:'2rem',
                    color:'pink',
                    
                    padding: '10px',
                   }}>Laptop store</p> */}
      </div>
            <div>

            </div>
        </div>
    )
}