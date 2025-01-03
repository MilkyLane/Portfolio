import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-gray-900 bg-opacity-90">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Nicholas Chihanga</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="nav-link">Home</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-2">
          <a href="#home" className="block px-4 py-2 hover:bg-gray-700">Home</a>
          <a href="#skills" className="block px-4 py-2 hover:bg-gray-700">Skills</a>
          <a href="#projects" className="block px-4 py-2 hover:bg-gray-700">Projects</a>
          <a href="#contact" className="block px-4 py-2 hover:bg-gray-700">Contact</a>
        </div>
      )}
    </header>
  );
}

export default Header;

