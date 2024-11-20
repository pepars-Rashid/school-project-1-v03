'use client';
import React, { useState } from 'react';
import {
  FiArrowLeft,
  FiPlus,
  FiChevronDown,
  FiMoreVertical,
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import ThreeDotsMenu from './threeDots';

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
    <div dir='rtl' className="flex flex-col gap-[5px] p-[10px]">
      <div className='flex justify-between items-center'>
      <button className="flex justify-center items-center gap-[5px] w-[75px] h-[35px] bg-slate-100 text-[12px] font-semibold rounded-[5px] border-[3px] border-[#BFBFBF]">
        <FiPlus/>
        <span>إضافة</span>
      </button>
      <span className='text-[16px] font-semibold'>الصفوف و الشعب</span>
      </div>

      <div className='h-[3px] my-[5px] bg-[#BFBFBF]'/>
      {levels.map((level, index) => (
        <div  key={index} className="relative p-[10px] rounded-[5px] outline outline-[2px] outline-offset-[-2px] outline-[#BFBFBF] level">
          
          <div className="level-header flex items-center justify-between h-fit bg-gray-1 rounded hover:bg-gray-100"
              onClick={() => toggleDropdown(index)}
          > 
            <span className='flex items-center gap-[12px]'>
                    <ThreeDotsMenu
                                onClick={() => handleAction('menu')} 
                    />
              {level.name}
            </span>
            <div className="flex items-center">
              <FiChevronDown className={`${level.isOpen && 'transform rotate-180 transition duration-500'} transform transition duration-500 `} />
            </div>
          </div>
          {level.isOpen && (
            <div className="">
              {level.sections.map((section, secIndex) => (
                <div key={secIndex} className="hover:bg-gray-300 section flex items-center justify-between bg-gray-2 rounded mt-1">
                  <span className='flex items-center gap-[12px]'>
                    <ThreeDotsMenu
                                onClick={() => handleAction('menu')} 
                    />
                    {section}
                  </span>
                  <FiArrowLeft/>
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