import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom'; // ✅ Tambahkan `useLocation` dan `Outlet`
import './index.css';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import WhatOdoo from './Pages/WhatThatOdoo.jsx';
import BIBasic from './Pages/BIBasic.jsx';
import BIAdvance from './Pages/BIAdvance.jsx';

// ✅ Komponen untuk mengupdate title
const TitleUpdater = () => {
  const location = useLocation(); // ✅ `useLocation` sudah diimpor

  useEffect(() => {
    const titles = {
      "/": "Home - Xentra",
      "/about": "About Us - Xentra",
      "/WhatThatOdoo": "What is Odoo? - Xentra",
      "/BusinessImplementationBasic": "Business Implementation Basic - Xentra",
      "/BusinessImplementationAdvance": "Business Implementation Advance - Xentra",
      "/KonsultasiOdoo": "Konsultasi Odoo - Xentra",
      "/SupportOdoo": "Support Odoo - Xentra",
    };
    document.title = titles[location.pathname] || "Xentra";
  }, [location]);

  return null;
};

// ✅ Layout utama
const Layout = () => {
  return (
    <>
      <TitleUpdater />
      <Outlet /> {/* ✅ Outlet harus ada agar halaman bisa ditampilkan */}
    </>
  );
};

// ✅ Router dengan Layout
const router = createBrowserRouter([
  {
    path: "/", // ✅ Harus ada `path` agar tidak error
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/WhatThatOdoo", element: <WhatOdoo /> },
      { path: "/BusinessImplementationBasic", element: <BIBasic /> },
      { path: "/BusinessImplementationAdvance", element: <BIAdvance /> },
      { path: "/KonsultasiOdoo", element: <h1 className="text-2xl font-semibold text-center">Konsultasi Odoo</h1> },
      { path: "/SupportOdoo", element: <h1 className="text-2xl font-semibold text-center">Support Odoo</h1> },
    ],
  },
]);

// ✅ Render aplikasi
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
