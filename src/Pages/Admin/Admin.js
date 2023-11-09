import React from 'react';
import Fired from './Fired';

const Admin = () => {

    return (
        <div className="">
            <div className="flex relative dark:bg-main-dark-bg">

                <div className="w-52 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                    {/* <AdminSidebar /> */}
                </div>
                <div
                    className="bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 overflow-hidden">
                    {/* <AdminNavbar /> */}

                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                    </div>
                    <div className="text-bold">
                        <Fired />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Admin;
