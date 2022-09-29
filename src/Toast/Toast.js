import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 import './Toast.css'

const Toast = () => {
  const tostBtn =()=>{
  toast("Workout Succesfull",{position:'top-center'})
  }
  return (
    <div>
      <button onClick={tostBtn} className='work-out-btn1 '>Worked Finised</button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Toast;