import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './AllProduct.css'

const AllProduct = () => {
  const [products, setProduct] =useState([])
  const [cart, setCart] =useState([])
  useEffect(() =>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setProduct(data))
  }, [])
  const addToCart = (product) =>{
   const newCart =[...cart, product];
   setCart(newCart)
   }
  return (
    <div className='all-Product'>
      <div>
        <div  className='main-heading'>
       <h1>BE A BEAST</h1>
       <h3>Today's Exercise outine</h3>
       </div>
       
      <div className="product-container">
       
       
       {
        products.map(product => <Product product={product} addToCart={addToCart}></Product>)
       }
      </div>
     </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default AllProduct;