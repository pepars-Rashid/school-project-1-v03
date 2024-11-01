'use client'
import React, { useState, useEffect } from 'react';  

const Dropdown = () => {  
    const [isOpen, setIsOpen] = useState(false);  

    const toggleDropdown = () => {  
        setIsOpen(prev => !prev);  
    };  

    const handleOutsideClick = (event) => {  
        if (isOpen && !event.target.closest('.dropdown')) {  
            setIsOpen(false);  
        }  
    };  

    useEffect(() => {  
        document.addEventListener('click', handleOutsideClick);  
        return () => {  
            document.removeEventListener('click', handleOutsideClick);  
        };  
    }, [isOpen]);  

    return (  
        <div className="relative inline-block dropdown">  
            <button  
                className="flex items-center justify-between w-full p-2 text-white bg-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"  
                onClick={toggleDropdown}  
            >  
                Dropdown Menu  
            </button>  
            <div  
                className={`absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}  
            >  
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 1</a>  
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 2</a>  
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 3</a>  
            </div>  
        </div>  
    );  
};  

export default Dropdown;