import React from 'react';
import Admin from './Pages/Admin/Admin';
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
  );
}

export default App;
