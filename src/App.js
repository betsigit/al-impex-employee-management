import React from 'react';
import Admin from './Pages/Admin/Admin';
//import Layout from './Pages/Component/Layout/Layout';
import './App.css';
import { ContextProvider } from './context/ContextProvider';
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
   
      <BrowserRouter>
        <ContextProvider>
          <div className="App">
            <Admin />
          </div>
        </ContextProvider>
      </BrowserRouter>
<<<<<<< HEAD
      
=======
    
>>>>>>> 2ad0ff3998ad4fc90e8d8a6ad568d471a7b78be4
  );
}

export default App;