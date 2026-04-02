import React from 'react';
import navImg from "../../assets/food.jpg"
const Navbar = () => {
    return (
         <nav className='nav-container'>
        <div className='nav-left'>
          <img src={navImg} alt="" />
          <p>Meal hub</p>
        </div>

        <div className='nav-right'>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p>Orders
          </p>
          <p>Blogs</p>
        </div>
      </nav>
    );
};

export default Navbar;