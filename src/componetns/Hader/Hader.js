import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
                <NavLink className={({ isActive }) =>
              isActive ? ' underline' : undefined
            }  to="/">Home</NavLink>
                <NavLink className={({ isActive }) =>
              isActive ? 'activeClassName' : undefined
            } to="/shop">Shop</NavLink>
                <NavLink className={({ isActive }) =>
              isActive ? 'activeClassName' : undefined
            } to="/orders">Orders</NavLink>
                <NavLink className={({ isActive }) =>
              isActive ? 'activeClassName' : undefined
            } to="/inventory">Inventory</NavLink>
                <NavLink className={({ isActive }) =>
              isActive ? 'activeClassName' : undefined
            } to="/about">About</NavLink>
            </ul> 
            </div>
           
        </nav>
    );
};

export default Hader;
//  className={({ isActive }) =>
// isActive ? activeClassName : undefined
// }