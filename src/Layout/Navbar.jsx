import React, { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <nav className='fixed  top-0 left-0 z-50 w-full bg-white border-gray-200'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        {/* Logo */}
        <a href='/' className='flex items-center space-x-3'>
          <span className='self-center text-2xl font-semibold whitespace-nowrap text-black'>Xentra</span>
        </a>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
          aria-controls='navbar-dropdown'
          aria-expanded={isNavbarOpen}
        >
          <span className='sr-only'>Open main menu</span>
          <svg className='w-5 h-5' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
          </svg>
        </button>

        {/* Navbar Items */}
        <div className={`${isNavbarOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id='navbar-dropdown'>
          <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0'>
            <li>
              <a href='About' className='block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'>
                About Us
              </a>
            </li>

            {/* Dropdown Odoo */}
            <li className='relative'>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className='flex items-center justify-between w-full py-2 px-3 text-black rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto'
              >
                Odoo
                <svg className='w-2.5 h-2.5 ms-2.5' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
                  <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className='absolute left-0 top-full mt-1 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-md w-44'>
                  <ul className='py-2 text-sm text-black'>
                    <li>
                      <a href='/WhatThatOdoo' className='block px-4 py-2 hover:bg-gray-100'>
                        Apa itu Odoo?
                      </a>
                    </li>
                    <li>
                      <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                        Business Implementation Basic
                      </a>
                    </li>
                    <li>
                      <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                        Konsultasi Odoo
                      </a>
                    </li>
                    <li>
                      <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                        Support Odoo
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <a href='#' className='block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'>
                Odoo vs SAP
              </a>
            </li>
            <li>
              <a href='#' className='block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'>
                Training
              </a>
            </li>
            <li>
              <a href='#' className='block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'>
                Client
              </a>
            </li>
            <li>
              <a href='#' className='block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
