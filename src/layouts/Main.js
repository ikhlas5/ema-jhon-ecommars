import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../componetns/Footer/Footer';
import Hader from '../componetns/Hader/Hader';

const Main = () => {
    return (
        <div>
          <Hader></Hader>
         <Outlet></Outlet> 
         <Footer></Footer> 
        </div>
    );
};

export default Main;