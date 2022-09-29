import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocation } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Weight from '../Weight/Weight';
import './Cart.css'
import Toast from '../../Toast/Toast';
// import '../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
// 
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
        <p className='address'><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon> Dhaka, Bangladesh</p>
      </div>
      </div>
      <div className='weight'>
       <Weight></Weight>
      </div>
      <div>
        <h2>Take Break</h2>
        <div className='number-button'>
        <div><button className='btn-number'>10s</button></div>
        <div><button className='btn-number'>20s</button></div>
        <div><button className='btn-number'>30s</button></div>
        <div><button className='btn-number'>40s</button></div>
        <div><button className='btn-number' >50s</button></div> 
        </div>

      </div>
      <div className='detail'>
        <h3>Exercise Details</h3>
        <p className='exercise-time'>Exercise time: <small className='total-time'><strong>{totalTime}s</strong></small></p>
       </div>
      <div className='detail'>
       <p className='exercise-time'>Break time: <small className='total-time'>0s</small></p>
      </div>
        
        <Toast></Toast>
    </div>
  );
};

export default Cart;