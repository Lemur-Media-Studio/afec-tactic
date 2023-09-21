import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar';
import Public from './Routes/Public';
import { BrowserRouter as Router } from 'react-router-dom';
import LanguageProvider from './Context/LanguageContext';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Router>
          <Navbar />
          <Public />
        </Router>
      </LanguageProvider>
    </div>
  );
}

export default App;
