'use client';
import React, { useState } from 'react';
import { FiMoreVertical } from 'react-icons/fi';

const ThreeDotsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-right">
      <button onClick={toggleMenu} className="flex items-center">
        <FiMoreVertical className="text-[#7164FA] cursor-pointer size-[20px] p-[2px] rounded-[5px] hover:bg-gray-100" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-[5px] w-48 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 1</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 2</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 3</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreeDotsMenu;
