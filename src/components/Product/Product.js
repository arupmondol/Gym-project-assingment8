import React from 'react';
import './product.css'


const Product = (props) => {
  // console.log(props.product)
  const {name, text, age, img, time} =props.product;
  const {addToCart,product} = props;
  return (
    <div className='product'>
     <img src={img} alt="" />
     <div className='all-text'>
     <h3>{name}</h3>
     <p><small>{text}</small></p>
     <h5>Age Restriction: {age}yr</h5>
     <h5>Time Duration: {time}s</h5>
     </div>
     <button onClick={() => addToCart(product)} className='button-main btn btn-primary'><h5>Sellect Exercise</h5></button>
    </div>
  );
};

export default Product;