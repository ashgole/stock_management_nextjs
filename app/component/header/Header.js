
"use client";
// components/Header.js
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-lg font-semibold">Stock Manager</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <nav className="hidden md:flex space-x-4">
          <Link href="/pages/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
          <Link href="/pages/inventory" className="text-white hover:text-gray-300">Inventory</Link>
          <Link href="/pages/settings" className="text-white hover:text-gray-300">Settings</Link>
        </nav>
      </div>
      {isOpen && (
        <nav className="mt-4 space-y-2 md:hidden">
          <Link href="/dashboard" className="block text-white">Dashboard</Link>
          <Link href="/pages/inventory" className="block text-white">Inventory</Link>
          <Link href="/settings" className="block text-white">Settings</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
