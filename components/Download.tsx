"use client";
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

const Download = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-gray-100 p-6">
      {/* Header Section */}
      <header className="mt-10">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Video Downloader
        </h1>
      </header>

      {/* Search Section */}
      <main className="flex flex-col items-center mt-10 w-full max-w-lg">
        <input
          type="text"
          placeholder="Enter video link here..."
          className="w-full p-4 text-black text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="mt-4 flex items-center justify-center w-full p-4 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600">
          <FiSearch className="mr-2" />
          Search
        </button>
      </main>

      {/* Footer Section */}
      <footer className="mt-10 flex flex-col items-center">
        <p className="text-gray-600 mb-4">Created by Akrem</p>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl text-gray-700 hover:text-blue-700" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl text-gray-700 hover:text-blue-400" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-gray-700 hover:text-blue-500" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Download;
