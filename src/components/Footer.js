import React from 'react';

function Footer() {
  return (
    <footer className="py-6 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Nicholas Chihanga. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

