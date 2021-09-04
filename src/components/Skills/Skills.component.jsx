import React from "react";
import Slider from "react-slick";
import {
  FaReact,
  FaPython,
  FaSass,
  FaGithub,
  FaHtml5,
  FaDatabase,
} from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";
import { AiFillApi, AiOutlineCloudDownload } from "react-icons/ai";
import {
  SiDjango,
  SiJavascript,
  SiRedux,
  SiPostgresql,
  SiCss3,
} from "react-icons/si";
import "./Skills.styles.css";

// Import slick carousel css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div id="skills" className="skills">
      <h1 className="skills-title title">Tech Stacks</h1>
      <div className="skills-items">
        <Slider className="skills-items-slider" {...settings}>
          <div className="skills-item">
            <FaPython size="3em"></FaPython>
            <h2>Python</h2>
            <p>8/10</p>
          </div>
          <div className="skills-item">
            <SiDjango size="3em"></SiDjango>
            <h2>Django</h2>
            <p>8/10</p>
          </div>
          <div className="skills-item">
            <SiJavascript size="3em"></SiJavascript>
            <h2>JavaScript</h2>
            <p>7/10</p>
          </div>
          <div className="skills-item">
            <FaSass size="3em"></FaSass>
            <h2>Sass</h2>
            <p>8/10</p>
          </div>
          <div className="skills-item">
            <SiRedux size="3em"></SiRedux>
            <h2>Redux</h2>
            <p>9/10</p>
          </div>
          <div className="skills-item">
            <FaReact size="3em"></FaReact>
            <h2>React</h2>
            <p>7/10</p>
          </div>
          <div className="skills-item">
            <FaDatabase size="3em"></FaDatabase>
            <h2>PostgreSQL/ NoSQL/Firebase</h2>
            <p>7/10</p>
          </div>
          <div className="skills-item">
            <FaHtml5 size="3em"></FaHtml5>
            <h2>HTML</h2>
            <p>10/10</p>
          </div>
          <div className="skills-item">
            <SiCss3 size="3em"></SiCss3>
            <h2>CSS</h2>
            <p>10/10</p>
          </div>
          <div className="skills-item">
            <FaGithub size="3em"></FaGithub>
            <h2>Github</h2>
            <p>8/10</p>
          </div>
          <div className="skills-item">
            <BsFillBootstrapFill size="3em"></BsFillBootstrapFill>
            <h2>Bootstrap</h2>
            <p>8/10</p>
          </div>
          <div className="skills-item">
            <AiFillApi size="3em"></AiFillApi>
            <h2>REST API design</h2>
            <p>7/10</p>
          </div>
          <div className="skills-item">
            <AiOutlineCloudDownload size="3em"></AiOutlineCloudDownload>
            <h2>Heroku/AWS</h2>
            <p>7/10</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Skills;
