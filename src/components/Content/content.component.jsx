import React from "react";
import About from '../About/About.component';
import ProjectContainer from '../Projects/Container/container.component';
import Contact from '../Contact /Contact.component';
import Skills from '../Skills/Skills.component';
import Footer from '../Footer/footer.component'
import "./content.styles.css";

const Content = () => {
  return (
    <div className="content">
      <About />
      <ProjectContainer />
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
};

export default Content;
