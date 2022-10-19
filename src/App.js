
import './App.css';
import Shop from './componetns/Shop/Shop';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import Inventory from './componetns/Inventory/Inventory';
import About from './componetns/About/About';
import Orders from './componetns/order/Order';
import Home from './componetns/Home/Home';
import Login from './componetns/Login/Login';
import SingUp from './componetns/SingUp/SingUp';
import PrivateRoute from './PrivateRoutes/PrivateRoute';

function App() {
  const router= createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/shop',
          loader:async ()=>fetch('products.json'),
          element:<Shop></Shop>
        },
        {
          path:'orders',
          loader:productsAndCartLoader ,
          element:<PrivateRoute><Orders></Orders></PrivateRoute>

        },
        {
          path:'inventory',
          element:<PrivateRoute><Inventory></Inventory></PrivateRoute>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SingUp></SingUp>
        },
        {
          path:'*',
          element:<div >Ops! Sorry Page not found:404!</div>
        }
      ],
      
    },
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
 
    </div>
  );
}

export default App;
