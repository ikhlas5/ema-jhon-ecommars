import React, { useEffect, useState } from 'react';
import { addToDb, getStorage } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css'
const Shop = () => {
    const [products,setProducts]=useState([]);
    const[cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    useEffect(()=>{
        const storedCart=getStorage();
        const savedCart=[];
        for(const id in storedCart){
          const addProduct=products.find(product=>product.id===id)
        //   console.log(addProduct);
          if(addProduct){
            const quantity=storedCart[id];
        addProduct.quantity=quantity;
          savedCart.push(addProduct);
          }
        }
        setCart(savedCart);
    },[products])
    const handleAddToCart=(product)=>{
        // console.log(product)
        const newCart=[...cart,product];
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
        {
            products.map(product=><Product 
                product={product}
                key={product.id}
                   handleAddToCart={handleAddToCart}>
                </Product>)
        }
       
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;