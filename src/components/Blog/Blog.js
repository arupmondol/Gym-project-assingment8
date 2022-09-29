import React from 'react';
import './Blog.css'
const Blog = () => {
  return (
    <div className='blog'>
      <div>
        <h2>HOW DOES REACT WORKS</h2>
        <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props</p>
      </div>
     <hr />
      <div>
        <h2>DIFFARENCE BETWEEN PROPS AND STATE</h2>
        <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.</p>
      </div>
      <hr />
      <div>
        <h2>WHAT WE DONE WITH USESTATE ELSE FETCH API</h2>
        <p>useState can be used to toggle between two values, usually true and false , in order to toggle a flag, such as the display mode</p>
      </div>
    </div>
  );
};

export default Blog;