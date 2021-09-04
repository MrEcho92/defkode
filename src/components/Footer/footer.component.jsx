import React from "react";
import { FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";
import "./footer.styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-title">Designed & built by Manni</p>
      <div className="footer-social">
        <a href="https://twitter.com/MrEcho92">
          <FaTwitter className="footer-social" size="1.5em" />
        </a>
        <a href="https://github.com/MrEcho92">
          <FaGithub  className="footer-social"size="1.5em" />
        </a>
        <a href="https://github.com/MrEcho92">
          <FaFacebook className="footer-social" size="1.5em" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
