import React, { useState } from 'react';
import { useStateContext } from '../../context/ContextProvider';
import { IoIosAddCircle } from "react-icons/io";
import InterviewForm from './InterviewForm';



const Adminboard = () => {
  const {
    handleClick,
  } = useStateContext();

  // const handleButtonClick = () => {

  // Handle button click logic here
  //   console.log('Button clicked!');
  // };
  const [showQAModal, setShowQAModal] = useState(false);

  const handleModalClose = () => {
    setShowQAModal(!showQAModal);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {showQAModal ?
        <InterviewForm handleModalClose={handleModalClose} />
        :
        <button type="button" onClick={handleModalClose} aria-label="dashboard" className="relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-green-600 to-green-400 px-4 py-3 text-white">
          <IoIosAddCircle className="h-5 w-5 fill-current text-gray-600 group-hover:text-green-600 dark:group-hover:text-green-400" />
          <span className="-mr-1 font-medium">Add Employee</span>
        </button>
      }

    </div>
  );
};

export default Adminboard;
