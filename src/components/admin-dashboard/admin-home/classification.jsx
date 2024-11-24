'use client'
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FiArrowLeft, FiPlus, FiChevronDown, FiMoreVertical } from 'react-icons/fi';

const Classification = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [levels, setLevels] = useState([
    { name: 'الصف الأول', sections: ['الشعبة الأولى', 'الشعبة الثانية'], isOpen: false },
    { name: 'الصف الثاني', sections: [], isOpen: false },
  ]);

  const toggleDropdown = useCallback((index) => {
    setLevels((prevLevels) =>
      prevLevels.map((level, i) => (i === index ? { ...level, isOpen: !level.isOpen } : level))
    );
  }, []);

  const handleAction = (e, action, levelIndex, sectionIndex) => {
    e.preventDefault();
    // Handle add, delete, rename actions here
    switch (action) {
      case 'add':
        // Implement add functionality
        break;
      case 'delete':
        // Implement delete functionality
        break;
      case 'rename':
        // Implement rename functionality
        break;
      default:
        break;
    }
  };

  return (
    <div dir="rtl" className="flex flex-col gap-[5px] p-[10px]">
      <div className="flex justify-between items-center">
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="flex justify-center items-center gap-[5px] w-[75px] h-[35px] bg-slate-100 text-[12px] font-semibold rounded-[5px] border-[3px] border-[#BFBFBF]"
        >
          <FiPlus />
          <span>إضافة</span>
        </button>
        <span className="text-[16px] font-semibold">الصفوف و الشعب</span>
      </div>

      <div className="h-[3px] my-[5px] bg-[#BFBFBF]" />
      {levels.map((level, index) => (
        <div key={index} className="relative">
          <button
            className={`w-full h-[34px] px-[10px] flex justify-start items-center border-[#BFBFBF] ${level.isOpen? 'rounded-t-[5px] border-t-[3px] border-r-[3px]': 'rounded-[5px] border-[3px]'} border-l-[3px] text-black hover:bg-gray-100 focus:outline-none focus:ring-blue-300 font-medium text-sm dark:hover:bg-gray-100 dark:focus:ring-blue-800`}
            onClick={() => toggleDropdown(index)}
          >
            <ThreeDotsMenu handleAction={handleAction} />
            <span className="w-full flex justify-between items-center">
              {level.name}
              <FiChevronDown
                className={`${level.isOpen && 'transform rotate-180 transition duration-500'} transform transition duration-500`}
              />
            </span>
          </button>
          {level.isOpen && (
            <div className="z-10 rounded-b-[5px] border-[#BFBFBF] border-b-[3px] border-r-[3px] border-l-[3px] bg-white divide-y divide-gray-100 dark:bg-white">
              <ul className="text-sm text-black">
                {level.sections.map((section, secIndex) => (
                  <li key={secIndex}>
                    <button className="w-full h-[34px] flex justify-between px-[10px] items-center hover:bg-gray-100 dark:hover:bg-gray-100">
                      <span className="flex items-center gap-[12px]">
                        <ThreeDotsMenu handleAction={handleAction} />
                        {section}
                      </span>
                      <FiArrowLeft />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const ThreeDotsMenu = ({ handleAction }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-right">
      <div onClick={(e) => {e.stopPropagation() ; setIsOpen(!isOpen)}} className="flex items-center">
        <FiMoreVertical className="text-[#7164FA] cursor-pointer size-[20px] p-[2px] rounded-[5px] hover:bg-gray-50" />
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-[5px] w-48 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div onClick={(e) => handleAction(e, 'add')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Add</div>
            <div onClick={(e) => handleAction(e, 'edit')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Edit</div>
            <div onClick={(e) => handleAction(e, 'delete')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Delete</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Classification;
