// Admindashboard.js

import React from 'react';
import { BiGridAlt, BiIntersect } from 'react-icons/bi';
import { useStateContext } from '../../context/ContextProvider';
import InterviewForm from './InterviewForm';
import { IoIosAddCircle } from "react-icons/io";



const Adminboard = () => {
  const {
   
    handleClick,
    isClicked
   
  } = useStateContext();

  const handleButtonClick = () => {

    // Handle button click logic here
    console.log('Button clicked!');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      
      <button type="button" onClick={() => handleClick("InterviewForm")} aria-label="dashboard" className="relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-green-600 to-green-400 px-4 py-3 text-white">
                      <IoIosAddCircle className="h-5 w-5 fill-current text-gray-600 group-hover:text-green-600 dark:group-hover:text-green-400" />
                      <span className="-mr-1 font-medium">Add Employee</span>
                    </button>
                   
    </div>
  );
};

export default Adminboard;
