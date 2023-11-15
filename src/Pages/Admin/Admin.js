import React, { useEffect } from 'react';
import { useStateContext } from '../../context/ContextProvider';
import Hired from './Hired';
import Fired from './Fired';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';
import Pending from './Pending';
import Adminboard from './Adminboard';
import Layout from '../Component/Layout/Layout';
import InterviewForm from './InterviewForm';


const Admin = () => {
  const {
    currentMode,
    activeMenu,
    handleClick,
    isClicked,
  } = useStateContext();

  useEffect(() => {
    handleClick("hired");
  }, []);

  return (
    <Layout>
      <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <div className="flex relative dark:bg-main-dark-bg">
          {activeMenu ? (
            <div className="w-58 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <AdminSidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <AdminSidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full overflow-hidden '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 overflow-hidden'
            }
          >
            <AdminNavbar />

            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full "></div>
            <div>
              {isClicked.fired && <Fired />}
              {isClicked.hired && <Hired />}
              {isClicked.pending && <Pending />}
              {isClicked.adminBoard && <Adminboard />}
              {isClicked.InterviewForm && <InterviewForm />}
            </div>
          </div>
        </div>
      </div>
      </Layout>
   
  );
};

export default Admin;
