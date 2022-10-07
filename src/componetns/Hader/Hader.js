import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import'./Hader.css'
const Hader = () => {
    const [open, setOpen]=useState(false);
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />

            <div>
                <div onClick={()=>setOpen(!open)} className="h-6 w-6 md:hidden">
                {
                    open?<FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                }
                </div>
            <ul className={`md:flex justify-center absolute duration-1000 ease-in-out md:static ${open?'top-6':'top-[-120px]'}`}>
              <Link to="/">Shop</Link>
              <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
            </ul> 
            </div>
           
        </nav>
    );
};

export default Hader;