import React from 'react';
import './Home.css';
import logo from '../assets/logo-text-clear.png'; // Ensure you have a logo file in the assets folder

const Home = () => {
  return (
    <section id="home" className="home-section">
      <img src={logo} alt="Senoptix Logo" className="logo" />
      {/* <h1 className="slogan">Innovating Electrochemical Sensing</h1> */}
    </section>
  );
};

export default Home;

