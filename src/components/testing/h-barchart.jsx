'use client'
import React from 'react';
import { motion } from 'framer-motion';

export default function ColumnDiagram1({ diagramHeight = '70%' }){
  const dataY = ['0%', '20%', '40%', '60%', '80%', '100%'];
  const columns = [
    { height: '100%', value: '1000' },
    { height: '50%', value: '500' },
    { height: '27%', value: '100' },
    { height: '27%', value: '100' },
    { height: '18%', value: '200' },
    { height: '22%', value: '50' },
    { height: '43%', value: '40' },
    { height: '27%', value: '20' },
    { height: '22%', value: '400' },
    { height: '2%', value: '10' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const columnVariants = {
    hidden: { height: 0 },
    visible: (height) => ({
      height,
      transition: { type: 'spring', stiffness: 80 }
    }),
    hover: {
      scale: 1.1,
      transition: { type: 'spring', stiffness: 300 }
    }
  };

  return (
    <motion.div 
      className="p-[15px] rounded-lg z-20"
      style={{ width: '100%', height: '100%' }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-left text-gray-400 text-sm font-semibold">Column Diagram</h1>
        <div className="flex items-center">
          <div className="bg-[#7164FA] rounded-lg h-1 w-8 mr-2"></div>
          <h1 className="text-gray-400 text-sm">Legend</h1>
        </div>
      </div>
      <div className="relative flex mt-[30px]" style={{ height: diagramHeight }}>
        <div className="absolute inset-0 flex flex-col justify-between pr-4">
          {dataY.reverse().map((value, index) => (
            <div key={index} className="flex items-center" style={{ height: `calc(${diagramHeight} / ${dataY.length - 10})` }}>
              <span className="text-black w-10 text-right mr-2">{value}</span>
              <div className="flex-grow h-px bg-[#BFBFBF] ml-[5px]"></div>
            </div>
          ))}
        </div>
        <div className="relative flex-grow flex items-end justify-between ml-16 mr-[20px] space-x-4 sm:space-x-6">
          {columns.map((column, index) => (
            <motion.div
              key={index}
              className="bg-[#7164FA] rounded-t-lg relative group"
              style={{ flex: `1 1 calc(100% / ${columns.length} - 0.5rem)`, height: column.height }}
              custom={column.height}
              variants={columnVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              {column.value && (
                <div className="absolute bottom-full mb-2 w-auto p-2 min-w-max left-1/2 transform -translate-x-1/2 rounded-md shadow-md text-white bg-gray-800 text-xs font-bold opacity-0 group-hover:opacity-100">
                  {column.value}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};    