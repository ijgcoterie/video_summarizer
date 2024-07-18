import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 row-span-2 bg-gray-100 shadow-md z-40 p-4">
      <nav>
        <ul className="space-y-4">
          <li><a href="#home" className="block text-gray-700 hover:text-gray-900">Home</a></li>
          <li><a href="#about" className="block text-gray-700 hover:text-gray-900">About</a></li>
          <li><a href="#services" className="block text-gray-700 hover:text-gray-900">Services</a></li>
          <li><a href="#contact" className="block text-gray-700 hover:text-gray-900">Contact</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;