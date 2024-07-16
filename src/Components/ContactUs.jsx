import React, { useState } from 'react';
import './ContactUs.css';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    fromEmail: '',
    userType: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/send-email', formData);
      setStatus('Email sent successfully');
    } catch (error) {
      setStatus('Error sending email');
      console.error(error);
    }
  };

  return (
    <section id="contact-us" className="contact-us-section">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Please reach out with any questions or inquiries.</p>
      <p>Email us directly at <a href="mailto:info@senoptix.com">info@senoptix.com</a></p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fromEmail">Your Email</label>
          <input
            type="email"
            id="fromEmail"
            name="fromEmail"
            value={formData.fromEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="toEmail">To</label>
          <input
            type="text"
            id="toEmail"
            name="toEmail"
            value="info@senoptix.com"
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="userType">I am a</label>
          <select
            id="userType"
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select one</option>
            <option value="researcher">Researcher</option>
            <option value="investor">Investor</option>
            <option value="medicalProfessional">Medical Professional</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {status && <p>{status}</p>}
    </section>
  );
};

export default ContactUs;
