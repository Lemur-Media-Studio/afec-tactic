import './App.css';
import React from 'react'
import './Style/css/style.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Public from './Routes/Public';
import FQRoutes from './Routes/FQRoutes';
import SQRoutes from './Routes/SQRoutes';
import LoginProvider from './Context/LoginContext';

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Router>
          <Public />
          <FQRoutes />
          <SQRoutes />
        </Router>
      </LoginProvider>

    </div>
  );
}

export default App;
