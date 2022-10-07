
import './App.css';
import Shop from './componetns/Shop/Shop';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import Inventory from './componetns/Inventory/Inventory';
import About from './componetns/About/About';
import Orders from './componetns/order/Order';
import Home from './componetns/Home/Home';

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
          element:<Orders></Orders>

        },
        {
          path:'inventory',
          element:<Inventory></Inventory>
        },
        {
          path:'about',
          element:<About></About>
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
