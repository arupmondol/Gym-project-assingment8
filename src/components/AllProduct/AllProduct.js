import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faDumbbell,faWifiStrong } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './AllProduct.css'
import Blog from '../Blog/Blog';
// import '../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
// 
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

    <div>
    <div className='all-Product'>
      <div>
        <div  className='main-heading'>
        
       <h1><FontAwesomeIcon icon={faDumbbell} ></FontAwesomeIcon>BE A BEAST</h1>
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
    <Blog></Blog>
    </div>
  );
};

export default AllProduct;