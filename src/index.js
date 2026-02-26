import React from 'react';
import './styles.css';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
//
const router = createBrowserRouter([
  {path:"/", element: <Home />},
  {path:"/home", element: <Home />},
  {path:"/about", element: <About />},
  {path:"/gallery", element: <Gallery />},
  {path:"/contact", element: <Contact />},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);


