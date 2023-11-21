import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiGridAlt } from 'react-icons/bi';
import { MdOutlineCancel, MdWorkOff, MdWorkHistory, MdWorkOutline } from 'react-icons/md';

import { useStateContext } from '../../context/ContextProvider';
import logo from '../../data/avatar.jpg';

const Sidebar = () => {
  const {
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };


  


  return (
    <div className="z-100 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {true && (
        <>
          <div className="flex justify-between items-center">
            <div className="items-center gap-3 ml-3 mt-4 flex flex-col text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <img src={logo} alt="" className="m-auto h-7 w-7 rounded-full object-cover lg:h-28 lg:w-40 lg:object-contain" />
              <h5 className="mt-4 hidden text-xl font-semibold text-gray-600 lg:block dark:text-gray-300">Al-impex</h5>
              <span className="hidden text-gray-400 lg:block">Admin</span>

            </div>
            <button
              type="button"
              onClick={() => setActiveMenu(!activeMenu)}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            >
              <MdOutlineCancel />
            </button>
          </div>

          <div className="border border-gray-300 my-4"></div>

          <div className=" mt-4 ">
            <div>

              <button type="button" onClick={() => handleClick("adminBoard")} aria-label="dashboard" className="relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-green-600 to-green-400 px-4 py-3 text-white">
                <BiGridAlt className="h-5 w-5 fill-current text-gray-600 group-hover:text-green-600 dark:group-hover:text-green-400" />
                <span className="-mr-1 font-medium">Dashboard</span>
              </button>

              <button type="button" onClick={() => handleClick("hired")} className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                <MdWorkOutline className="h-5 w-5 fill-current text-gray-600 group-hover:text-green-600 dark:group-hover:text-green-400" />
                <span className="-mr-1 font-medium">Hired</span>
              </button>
              <button type="button" onClick={() => handleClick("pending")} className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                <MdWorkHistory className="h-5 w-5 fill-current text-gray-600 group-hover:text-green-600 dark:group-hover:text-green-400" />
                <span className="-mr-1 font-medium">Pedding</span>
              </button>

              <button type="button" onClick={() => handleClick("fired")} className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                <MdWorkOff className="h-5 w-5 fill-current text-gray-600 group-hover:text-green-600 dark:group-hover:text-green-400" />
                <span className="-mr-1 font-medium">Fired</span>
              </button>


            </div>

          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
