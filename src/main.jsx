import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom'; // ✅ Tambahkan `useLocation` dan `Outlet`
import './index.css';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import WhatOdoo from './Pages/Odoo/WhatThatOdoo.jsx';
import BIBasic from './Pages/BusinessImplementation/BIBasic.jsx';
import BIAdvance from './Pages/BusinessImplementation/BIAdvance.jsx';
import Konsultasi from './Pages/Odoo/Konsultasi.jsx';
import SupportOdoo from './Pages/Odoo/SupportOdoo.jsx';
import FunctionalTraining from './Pages/Training/FunctionalTraining.jsx';
import TrainingSection from './Pages/Training/TrainingSection.jsx';
import MasterclassTraining from './Pages/Training/MasterclassTraining.jsx';
import DeveloperTraining from './Pages/Training/DeveloperTraining.jsx';
import Workshop from './Pages/Training/Workshop.jsx';
import NotFound from './Pages/Error.jsx';
import OdooVsSap from './Pages/OdooVsSap.jsx';

// ✅ Komponen untuk mengupdate title
const TitleUpdater = () => {
  const location = useLocation(); // ✅ `useLocation` sudah diimpor

  useEffect(() => {
    const titles = {
      "/": "Home - Xentra",
      "/odoo-vs-sap": "Odoo vs SAP - Xentra",
      "/WhatThatOdoo": "What is Odoo? - Xentra",
      "/BusinessImplementationBasic": "Business Implementation Basic - Xentra",
      "/BusinessImplementationAdvance": "Business Implementation Advance - Xentra",
      "/KonsultasiOdoo": "Konsultasi Odoo - Xentra",
      "/SupportOdoo": "Support Odoo - Xentra",
      "/Training": "Training  - Xentra",
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
    element: <Layout />, errorElement: <NotFound /> ,
    children: [
      { path: "/", element: <Home />},
      { path: "/odoo-vs-sap", element: <OdooVsSap /> },
      { path: "/WhatThatOdoo", element: <WhatOdoo /> },
      { path: "/BusinessImplementationBasic", element: <BIBasic /> },
      { path: "/BusinessImplementationAdvance", element: <BIAdvance /> },
      { path: "/KonsultasiOdoo", element: <Konsultasi /> },
      { path: "/supportOdoo", element: <SupportOdoo /> },
      
            // Training Section tanpa children
      { path: "/TrainingSection", element: <TrainingSection /> },
      { path: "/FunctionalTraining", element: <FunctionalTraining /> },
      { path: "/DeveloperTraining", element: <DeveloperTraining /> },
      { path:  "/MasterclassTraining", element: <MasterclassTraining /> },
      { path: "/Workshop", element: <Workshop /> },
    ],
  },
],
);
// ✅ Render aplikasi
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
