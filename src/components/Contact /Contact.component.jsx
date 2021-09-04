import React from "react";
import "./Contact.styles.css";

const Contact = () => {
  return (
    <div id='contact' className="contact">
      <div className="contact-content">
        <h1 className='contact-title title'>Get in Touch</h1>
        <p>
          I'm currently available for freelance work. If you are looking to discuss your projects, my inbox
          is always open. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>
        <a className='submit-btn' href="mailto:skilledopp@gmail.com">Say Hello</a>
      </div>
    </div>
  );
};

export default Contact;
