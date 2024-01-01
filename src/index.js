import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Getstart from './components/Getstart/Getstart';
import User from './components/User/User';
import Github from './Github/Github';



// createBrowserRouter jo  array of object leta hai jisme path and render element ke baare me hota hai 
// METHOD 1;
// const router=createBrowserRouter(
//   // children outlet vala element ko render karega 
//   [
//     {path:"/",element:<App/>, // thsi is parent route always render
//     children:[// follwing are the child/nested route
//       {path:"/",element:<Home/>},
//       {path:"/about",element:<About/>},
//       {path:"/contact",element:<Contact/>},
//       {path:"/login",element:<Login/>},
//       {path:'/start',element: <Getstart/>}
//     ]} 
//     ]
// )
// MWETHOD 2;
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='start' element={<Getstart/>}/>
      <Route path='github' element={<Github/>}/>
      {/* // to get value from url. we used /:userid syntex while making the path. and where userid is variable which store valu from url .and give acees to the componet which render on this path   */}
      <Route path='user/:userid' element={<User/>}/>

    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*  router used karte time StrictMode me <RouterProvider> ko call karna parta hai   $ $ ye kisi variable ko call karega jo hoga     */}
   <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
