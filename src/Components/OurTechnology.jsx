import React from 'react';
import './OurTechnology.css';
import gif from '../assets/diagram.gif';

const OurTechnology = () => {
  return (
    <div className="our-technology">
      <h1 className="section-title">Our Technology</h1>
      <div className="section">
        <div className="subsection">
          <div className="subsection-content">
            <h2 className="subsection-title">Senoptix Light-activated Electrochemistry</h2>
            <p className="subsection-text">
              Our advanced light-activated electrochemistry technology leverages the power of high-density electrode arrays 
              to provide accurate and reliable sensing applications. This technology is a game-changer in the field of 
              biosensing, offering unprecedented sensitivity and specificity.
            </p>
          </div>
          <img src={gif} alt="Light-activated electrochemistry diagram" className='medium-gif' />
          <hr className="faint-divider" />
        </div>
        
        <div className="subsection">
          <div className="subsection-content">
            <h2 className="subsection-title">Aptamers</h2>
            <p className="subsection-text">
              Aptamers are single-stranded DNA or RNA molecules that can bind to specific targets with high affinity and 
              specificity. They play a crucial role in our sensing technology, enhancing the detection capabilities of 
              our devices.
            </p>
          </div>
        </div>
        <hr className="faint-divider" />
      </div>

      <h2>Applications of Electrochemistry</h2>
      <p className="subsection-text">
        Our technology is applicable in a wide range of fields, including medical diagnostics, environmental monitoring, 
        and food safety. The versatility and precision of our devices make them suitable for various complex sensing tasks.
      </p>
      <hr className="faint-divider" />

      <h2>Why Our Device?</h2>
      <p className="subsection-text">
        Our device stands out due to its high sensitivity, specificity, and versatility. It provides reliable results quickly, 
        making it an invaluable tool for researchers and professionals in various industries. The ease of use and integration 
        with existing systems further enhances its appeal.
      </p>
      <hr className="faint-divider" />
    </div>
  );
};

export default OurTechnology;
