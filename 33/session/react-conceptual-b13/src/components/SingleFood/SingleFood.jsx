import React from 'react';
import "./SingleFood.css"
const SingleFood = ({food,addToCart}) => {
    return (
        <div className='card'>
            <img src={food.strMealThumb} alt="" />
            <h1>{food.strMeal}</h1> 
            
            <button onClick={()=>addToCart(food)}>Add to cart</button>
        </div>
    );
};

export default SingleFood;