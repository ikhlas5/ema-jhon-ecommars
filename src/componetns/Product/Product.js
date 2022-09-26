import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import'./Product.css'
const Product = (props) => {
    
    // console.log(props);
    const{product,handleAddToCart}=props
    const{name, img, seller, price, ratings}=product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h4 className='products-name'>{name}</h4>
            <p id='price'>Price: ${price}</p>
            <p>Seller: {seller}</p>
            <p><small>Ratings: {ratings}</small></p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;