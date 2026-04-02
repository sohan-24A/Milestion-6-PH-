import React from 'react';

const Cart = ({ cart, handleRemove }) => {
    return (
        <div>
            {
                cart.map(c => 
                    <h1 key={c.idMeal}>
                        {c.strMeal}
                        <button onClick={() => handleRemove(c.idMeal)}>X</button>
                    </h1>
                )
            }
        </div>
    );
};

export default Cart;