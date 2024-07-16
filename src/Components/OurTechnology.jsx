import React from 'react';
import './OurTechnology.css';
import gif from '../assets/diagram.gif'
const OurTechnology = () => {
return (
        <div>
        <h1>Our Technology</h1>
        <section id="tech1">
        <h2>Senoptix Light-activated Electrochemistry</h2>
        <p>Details about Senoptix Light-activated Electrochemistry...</p>
        <p>How it works</p>
        <img src={gif} alt="Light-activated Electrochemistry GIF" />
        </section>
        <section id="tech2">
        <h2>Aptamers</h2>
        <p>Details about Aptamers...</p>
        </section>
        <section id="tech3">
        <h2>Applications of Electrochemistry</h2>
        <p>Details about Applications of Electrochemistry...</p>
        </section>
        <section id="tech4">
        <h2>Why Our Device?</h2>
        <p>Why Senoptix is good</p>
        </section>
        </div>
);
};
export default OurTechnology;