// Admindashboard.js

import React from 'react';

const Adminboard = () => {
  const handleButtonClick = () => {
    // Handle button click logic here
    console.log('Button clicked!');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-bold mb-4"></h1>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleButtonClick}
      >
        Add Emplyoee
      </button>
    </div>
  );
};

export default Adminboard;
