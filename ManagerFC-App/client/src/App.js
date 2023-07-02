import React from "react";
import './App.css';
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./Components/Navbar/Navbar";
import Edit from "./Components/edit";
import SquadPlayerDetails from "./Pages/SquadPlayerDetails/SquadPlayerDetails";
import AddToSquad from "./Pages/AddToSquad/AddToSquad";
import SquadPlayer from "./Pages/SquadPlayer/SquadPlayer";
import Home from "./Pages/Home/Home";
import NewProfile from "./Pages/NewProfile/NewProfile";
import Shortlist from "./Pages/Shortlist/Shortlist";
import ShortlistedDetails from "./Pages/ShortlistedDetails/ShortlistedDetails";
import EditpreselectPlayer from "./Components/editsquadPlayers";
import Footer from "./Components/Footer/Footer";



const App = () => {

  return (
    <div>
      
      <div className="App" style={{ margin: 0 }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/squad" element={<SquadPlayer />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/add-to-squad" element={<AddToSquad />} />
          <Route path="/detail/:id" element={<SquadPlayerDetails />} />
          <Route path="/new-profile" element={<NewProfile />} />
          <Route path="/shortlist" element={<Shortlist />} />
          <Route path="/shortlisted-player/:id" element={<ShortlistedDetails />} />
          <Route path="/edit-shortlisted-player/:id" element={<EditpreselectPlayer />} />

        </Routes>
        <Footer />
      </div>
  
    </div>
  );
};

export default App;
