import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AuthProviders from './Provider/AuthProviders.jsx';
import Order from './Components/Order.jsx';
import PrivateRoutes from './Components/Routes/PrivateRoutes.jsx';
import Profile from './Components/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {path:'/',
      element:<Home></Home>
    },
    {path:'/header',
    element:<Header></Header>
  },
  {path:'/login',
  element:<Login></Login>
},
{path:'/register',
element:<Register></Register>
},
{
  path:'/order',
  element:<PrivateRoutes><Order></Order></PrivateRoutes>
},
{
  path:'/profile',
  element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
}
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProviders>
 <RouterProvider router={router} />
 </AuthProviders>
  </React.StrictMode>,
)
