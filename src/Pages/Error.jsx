import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="mt-4 text-2xl text-gray-700">Oops! Halaman tidak ditemukan.</p>
        <p className="mt-2 text-lg text-gray-500">Mungkin Anda tersesat?</p>
        <img
          src="https://media.giphy.com/media/3o7aD2sa1g0g0g0g0g/giphy.gif"
          alt="Funny Cat"
          className="mx-auto mt-6 w-1/2 rounded-lg shadow-lg"
        />
        <Link to="/" className="mt-6 inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFound;