import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import'./Cart.css'
const Cart = (props) => {
    const { cart, clearCart, children } = props;
    // console.log(cart)
    let total=0;
    let shipping=0;
    let quantity=0;
    for(const product of cart){
        quantity=quantity+product.quantity;
        total=total+product.price * product.quantity;
        shipping=shipping+product.shipping * product.quantity;
    }
    const tax= parseFloat((total*10/100).toFixed(2));
    const grandTotal= total+ shipping+tax;
    return (
        <div className='cart text-2xl'>
            <h2 className='mb-5 underline text-violet-700  font-medium'>Order Summary</h2>
               
               <p className='sapce-between mb-3'>Selected Items: <span className='text-orange-600'>{quantity}</span></p>
                <p className='sapce-between mb-3'>Price:<span className='text-orange-600'>${total}</span></p>
                <p className='sapce-between mb-3'>Shipping: <span className='text-orange-600'>{shipping}</span></p>
                <p className='sapce-between mb-3'>Tax: <span className='text-orange-600'>{tax}</span></p>
                <hr className='border-2 border-slate-800' />
                <h4 className='sapce-between'>Total:<span className='text-orange-600'>{grandTotal.toFixed(2)}</span></h4>
                <div className='cart-delete-container'>
                <button  onClick={clearCart}>Clear Cart
                <FontAwesomeIcon icon={faTrashAlt} className='cart-delete-icon ml-2'></FontAwesomeIcon>
                </button>
                </div>
        </div>
    );
};

export default Cart;