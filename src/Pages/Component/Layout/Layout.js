// Layout.js

import React from 'react';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      {/* Other layout elements can go here */}
      <div className="flex-grow">{children}</div>
      {/* Include the Footer component */}
      <Footer />
    </div>
  );
};

export default Layout;
