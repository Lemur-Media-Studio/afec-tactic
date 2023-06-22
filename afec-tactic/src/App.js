import './App.css';
import React from 'react'
import './Style/css/style.css'
import NavBar from './Components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Public from './Routes/Public';
import Footer from './Components/Footer';
import FQRoutes from './Routes/FQRoutes';
import SQRoutes from './Routes/SQRoutes';

function App() {
  return (
    <div className="App">

      <Router>
        <Public />
        <FQRoutes />
        <SQRoutes />
      </Router>

    </div>
  );
}

export default App;
