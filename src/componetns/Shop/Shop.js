import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStorage } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css'
const Shop = () => {
    // const [products,setProducts]=useState([]);
    const products = useLoaderData();
    const[cart,setCart]=useState([]);
   

    const clearCart=()=>{
        setCart([]);
        deleteShoppingCart();
    }
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
    const handleAddToCart=(selectedProduct)=>{
        let newCart=[];
        const exists = cart.find(product=>product.id === selectedProduct.id)
        // console.log(product)
        if(!exists){
            selectedProduct.quantity=1;
            newCart=[...cart,selectedProduct];
        }
        else{
            const rest=cart.filter(product=>product.id !== selectedProduct.id)
            exists.quantity=exists.quantity+1;
            newCart=[...rest,exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className='shop-container '>
         
         <div className="products-container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {
            products.map(product=><Product 
                product={product}
                key={product.id}
                   handleAddToCart={handleAddToCart}>
                </Product>)
        }
       
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCart} ></Cart>
            </div>
         
        </div>
    );
};

// export default Shop;
export default Shop;