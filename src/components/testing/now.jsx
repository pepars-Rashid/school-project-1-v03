'use client';
import React, { useState } from 'react';
import {
  FiChevronDown,
  FiMoreVertical,
} from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function DegreeLevels() {
  const [levels, setLevels] = useState([
    { name: 'الصف الأول', sections: ['الشعبة الأولى', 'الشعبة الثانية'], isOpen: false },
    { name: 'الصف الثاني', sections: [], isOpen: false },
  ]);

  const toggleDropdown = (index) => {
    setLevels(levels.map((level, i) => i === index ? { ...level, isOpen: !level.isOpen } : level));
  };

  const handleAction = (action, levelIndex, sectionIndex) => {
    // Handle add, delete, rename actions here
    switch(action) {
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
    <div dir='rtl' className="p-[10px] over-flow-">
      <button className="">إضافة</button>
      {levels.map((level, index) => (
        <div  key={index} className="relative level" 
            onClick={() => toggleDropdown(index)}
        >
          <div className="level-header flex items-center justify-between p-2 bg-gray-100 rounded mt-2">
            
            <span className='flex items-center gap-[12px]'>
              <FiMoreVertical className='cursor-pointer' 
                              onClick={() => handleAction('menu')} 
              />
              {level.name}
            </span>
            <div className="flex items-center">
              <FiChevronDown className={`${level.isOpen && 'transform rotate-180 transition duration-500'} transform transition duration-500 `} />
            </div>
          </div>
          {level.isOpen && (
            <div className="ml-4 mt-2">
              {level.sections.map((section, secIndex) => (
                <div key={secIndex} className="section flex items-center justify-between p-2 bg-gray-200 rounded mt-1">
                  <span className='flex items-center gap-[12px]'>
                    <FiMoreVertical className='cursor-pointer' 
                                onClick={() => handleAction('menu')} 
                    />
                    {section}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const TitleSection = () => {
  return (
    <>
      <div dir="rtl" className="relative flex items-center gap-2 rounded-md transition-colors hover:bg-slate-100 cursor-pointer mb-6 border-slate-300">
        <div className='z-10 h-12 w-12 bg-blue-300 border-2 border-indigo-700 rounded-md'></div>
        <div>
          <p className="text-lg font-semibold">طارق صابوني</p>
          <p className="text-sm text-gray-500">مشرف التطبيق</p>
        </div>
      </div>
      <div className="h-0.5 w-full bg-slate-300 mb-6"/>
    </>
  );
};
