import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import WhatOdoo from './Pages/WhatThatOdoo.jsx';
import BusinessImplementBasic from './Pages/BIBasic.jsx';

// import App from './App.jsx';
// import { BrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/WhatThatOdoo',
    element: <WhatOdoo />,
  },
  {
    path: '/BusinessImplementationBasic',
    element: <BusinessImplementBasic />,
  },
  {
    path: '/BusinessImplementationAdvance',
    element: <h1 className='text-2xl font-semibold text-center'>Business Implementation Advanced</h1>,
  },
  {
    path: '/KonsultasiOdoo',
    element: <h1 className='text-2xl font-semibold text-center'>Konsultasi Odoo</h1>,
  },
  {
    path: '/SupportOdoo',
    element: <h1 className='text-2xl font-semibold text-center'>Support Odoo</h1>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
