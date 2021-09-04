import React from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";
import Profile from "../../assets/profile.jpg";
import "./About.styles.css";

function About() {
  return (
    <div class="about">
      <div class="about-me">
        <h1 className="about-me-big-heading">
          Hello, my name is Manni <span className="wave">👋</span>
        </h1>
        <p>
          I'm a full stack Web Developer based in Oxford, UK and specializing in
          building awesome digital experiences. I'm focused on building
          human-centered products.
        </p>
        <div>
          <a href="https://twitter.com/MrEcho92">
            <FaTwitter className="about_social" size="2.5em" />
          </a>
          <a href="https://github.com/MrEcho92">
            <FaGithub className="about_social" size="2.5em" />
          </a>
        </div>
      </div>
      <div class="about-img">
        <img src={Profile} className="about-image-profile" alt="about-me"></img>
      </div>
    </div>
  );
}

export default About;
