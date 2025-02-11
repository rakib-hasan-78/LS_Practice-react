import React from 'react';

const Cart = ({cart}) => {
    return (
        <div 
         className='w-full d-flex flex-column align-items-center justify-content-center'>
            <div 
             className='w-100 d-flex align-content-center justify-content-center'>
                cart items : {cart.length}
            </div>
            <div className='w-100 d-flex align-items-center justify-content-center gap-1'>
                {cart.map((product, index)=>(
                    <div className='cart-img-set' key={index+1}>
                        <img className='w-100 h-100' src={product.image} alt="cart.name" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;