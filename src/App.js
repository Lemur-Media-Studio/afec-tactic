import './App.css';
import React from 'react'
import './Style/css/style.css'
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import Public from './Routes/Public';
import FQRoutes from './Routes/FQRoutes';
import SQRoutes from './Routes/SQRoutes';
import LoginProvider from './Context/LoginContext';
import "@stripe/stripe-js";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <HashRouter hashtype="hashbang">
          <Public />
          <FQRoutes />
          <SQRoutes />
        </HashRouter>
      </LoginProvider>

    </div>
  );
}

export default App;
