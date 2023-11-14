import React from 'react';
import { Link } from 'react-router-dom';

import { BiGridAlt } from 'react-icons/bi';
import { MdOutlineCancel,MdWorkOff, MdWorkHistory, MdWorkOutline } from 'react-icons/md';
import { RiPassPendingLine } from 'react-icons/ri';
import { GiClockwork } from 'react-icons/gi';

import avatat from '../../data/avatar.jpg'
import { useStateContext } from '../../context/ContextProvider';



const AdminSidebar = () => {
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
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link type="button"
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <img className="mt-6   rounded-xl" alt="logo A" style={{ height: "400px", width: "80px" }} />
            </Link>
            <button
              type="button"
              onClick={() => setActiveMenu(!activeMenu)}
              style={{ color: "green" }}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            >
              <MdOutlineCancel />
            </button>
          </div>

          <div className="mt-4">
            <div className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between  bg-white px-2 pb-3 transition duration-300 md:w-[23%] lg:ml-0 lg:w-[20%] xl:w-[15%] 2xl:w-[10%] dark:bg-gray-800 dark:border-gray-700">
              <div>
                <div className="mt-8 text-center">
                <img src={avatat} alt="" className="m-auto h-7 w-7 rounded-full object-cover lg:h-28 lg:w-40 lg:object-contain"/>

                  <h5 className="mt-4 hidden text-xl font-semibold text-gray-600 lg:block dark:text-gray-300">Al-impex</h5>
                  <span className="hidden text-gray-400 lg:block">Admin</span>
                </div>
                <div className="border border-gray-300 my-4"></div>
                <ul className="mt-8 space-y-2 tracking-wide">
                  <li>
                    <button type="button" onClick={() => handleClick("adminBoard")} aria-label="dashboard" className="relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-green-600 to-green-400 px-4 py-3 text-white">
                      <BiGridAlt className="h-5 w-5 fill-current text-gray-600 group-hover:text-green-600 dark:group-hover:text-green-400" />
                      <span className="-mr-1 font-medium">Dashboard</span>
                    </button>
                  </li>

                  <li>

                    <button type="button" onClick={() => handleClick("hired")} className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                      <MdWorkOutline className="h-5 w-5 fill-current text-gray-600 group-hover:text-green-600 dark:group-hover:text-green-400" />
                      <span className="-mr-1 font-medium">Hired</span>
                    </button>
                  </li>

                  <li>
                    <button type="button" onClick={() => handleClick("pending")} className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                      <MdWorkHistory className="h-5 w-5 fill-current text-gray-600 group-hover:text-green-600 dark:group-hover:text-green-400" />
                      <span className="-mr-1 font-medium">Pedding</span>
                    </button>
                  </li>

                  <li>
                    <button type="button" onClick={() => handleClick("fired")} className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                      <MdWorkOff className="h-5 w-5 fill-current text-gray-600 group-hover:text-green-600 dark:group-hover:text-green-400" />
                      <span className="-mr-1 font-medium">Fired</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )
      }
    </div>
  );
};

export default AdminSidebar;
