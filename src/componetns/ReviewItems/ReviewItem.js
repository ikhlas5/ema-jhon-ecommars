import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import'./ReviewItem.css'

const ReviewItem = ({product, handleRemoveItem}) => {
    const{id, name, price,quantity, shipping,img}=product;
    return (
        <div  className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
            <div className="review-details">
                <h5>{name}</h5>
                <p>Price: <span className='text-orange-600'>${price}</span></p>
                <p><small>Shipping: <span className='text-orange-600'>${shipping}</span></small></p>
                <p><small>Quantity: <span className='text-orange-600'>${quantity}</span></small></p>
            </div>
            <div className="delete-container">
                <button onClick={()=>handleRemoveItem(id)} className='btn-delete'>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
            </div>
        </div>
    );
};

export default ReviewItem;