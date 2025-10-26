// src/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h3 className="contact-heading">Let's Collaborate </h3>

      <form
        action="https://formspree.io/f/xanbdvoj" // 🔁 Replace with your actual Formspree URL
        method="POST"
        className="contact-form"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
        <button type="submit">Send </button>
      </form>
    </div>
  );
};

export default Contact;
