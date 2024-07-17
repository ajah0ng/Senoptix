import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import OurTechnology from './Components/OurTechnology';
import OurTeam from './Components/OurTeam';
import ContactUs from './Components/ContactUs';
import './App.css';


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/our-technology" element={<OurTechnology />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;