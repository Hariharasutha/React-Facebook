import React from 'react';
import './style/cart.css'; // Import your CSS file
import product1 from '../images/images/watch1.avif';
import product2 from '../images/images/watch2.avif';
import product3 from '../images/images/glass.avif';
import product4 from '../images/images/crocs.avif';
import product5 from '../images/images/close.avif';
import product6 from '../images/images/outfit.avif';

const Cart = () => {
  const products = [
    {
      id: 1,
      name: "WROGN Men Silver-Toned Analogue Watch",
      image: product1,
      price:"20000$" 
    },
    {
      id: 2,
      name: "VAN HEUSEN Analog Watch",
      image: product2,
      price:"7750$"
    },
    {
      id: 3,
      name: "Cold Grey Cateye Sunglasses",
      image: product3,
      price:"2000$"
    },
    {
      id: 4,
      name: "Vincent Chase",
      price:"8500$",
      
      image: product4,
    },
    {
      id: 5,
      name: "Easy-iron T-shirt Slim Fit",
      price:"900$",
      
      image: product5,
    },
    {
      id: 6,
      name: "SLEEVE MIDI - Shirt dress",
      
      image: product6,
      price:"5250$"
    },
    
  ];

  return (
    
      <div className="card-container">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <button className="buttons">{product.price}</button>
        </div>
      ))}
       <div className="pu-20 d-non"></div>
    </div>

  );
};

export default Cart;