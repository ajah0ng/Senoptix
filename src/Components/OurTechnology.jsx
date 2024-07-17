import React from 'react';
import './OurTechnology.css';
import gif from '../assets/diagram.gif';
import components_photo from '../assets/components.png';

const OurTechnology = () => {
  return (
    <div className="our-technology">
      <h1 className="section-title">Our Technology</h1>
      <div className="section">
        <div className="subsection">
          <div className="subsection-content">
            <h2 className="subsection-title">Senoptix Light-activated Electrochemistry</h2>
            <p className="subsection-text">
            At the core, Senoptix’s advanced light-activated electrochemistry technology leverages the power of high-density electrode arrays to provide accurate and reliable sensing applications. 
            Through shining a light across the electrode, and attaching biorecognition elements to the silicon elecrode, results are calibrated yielding electrochemically quantitative signals. By illuminated the area with a light pointer, Senoptix’s technology allows for the detection of multiple markers in one sample, rapidly and concurrently. 
            This technology is a game-changer in the field of biosensing, offering unprecedented sensitivity and specificity.
            </p>
          </div>
          <img src={gif} alt="Light-activated electrochemistry diagram" className='medium-gif' />
          <p className="subsection-text">
            The final product of Senoptix comprises three main components, the device that houses the electronics, optics and fluidics, an insertable electrode that is modified to the therapy area of interest, and the analysis software and user interface.
          </p>
          <img src={components_photo} alt="components breakdown" className='small-image' />
          <hr className="faint-divider" />
        </div>
        
        <div className="subsection">
          <div className="subsection-content">
            <h2 className="subsection-title">Aptamers</h2>
            <p className="subsection-text">
            Aptamers are short, single-stranded DNA or RNA (ssDNA or ssRNA) molecules that can selectively bind to a specific target, including proteins, peptides, carbohydrates, small molecules, toxins, and even live cells. 
            Making a rise in the market, the application of aptamers for biosensing techniques offer high performance in selectivity and selectivity and production in comparison to antibodies. By modifying our silicon electrode with specific aptamers tailored for the specific therapy area alongside our novel light-activated technology this enhances the sensing abilities of our technology.
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
