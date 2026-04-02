import React, { use, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Cart from "../Cart/Cart";
import SingleFood from "../SingleFood/SingleFood";

const FoodSection = ({ foodDataRes }) => {
  const data = use(foodDataRes);
  const foods = data.meals;
  const [cart, setCart] = useState([])


  const addToCart = (foodData) => {
    setCart([...cart, foodData])
  }

  const handleOrder = () => {
    setCart([])
    toast.success("order completed!")
  }

  const handleRemove = (id) => {
    const remaining = cart.filter(item => item.idMeal !== id)
    setCart(remaining)
  }
  return (
    <div className="foods-container-parent">
      <div style={{ width: "75%" }} className="foods-container">
        {foods.map((food) => (
          <SingleFood addToCart={addToCart} food={food}></SingleFood>
        ))}
      </div>

      <div style={{ backgroundColor: "cyan", width: "25%" }}>
        <h1>Cart</h1>
        <Cart cart={cart} handleRemove={handleRemove}></Cart>
        <button onClick={handleOrder}>Order</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FoodSection;
