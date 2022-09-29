import React from 'react';
import Weight from '../Weight/Weight';
import './Cart.css'

const Cart = (props) => {

  const {cart} =props;
  console.log(cart)
  let totalTime = 0;
  for(const product of cart){
    totalTime = totalTime + product.time
  }
  return (
    <div className='cart'>
      <div className='personal-info'>
        <div>
        <img src="photomy.PNG" className='personal-photo' alt="" />
      </div>
      <div className='name'>
        <h2>Arup Mondal</h2>
        <p className='address'>Dhaka, Bangladesh</p>
      </div>
      </div>
      <div className='weight'>
       <Weight></Weight>
      </div>
      <div className='detail'>
        <h3>Exercise Details</h3>
        <p className='exercise-time'>Exercise time: <small className='total-time'>{totalTime}s</small></p>
       </div>
        <button className='work-out-btn'>Workout Finished</button>
    </div>
  );
};

export default Cart;