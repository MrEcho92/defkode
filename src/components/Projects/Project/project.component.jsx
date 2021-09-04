import React from "react";
import "./project.styles.css";

function ProjectItem(props) {
  return (
    <div className="project-card">
      <div className="project-card-image"><img className="item-image" src={props.item.imageUrl} alt="item"></img></div>
      <div className="project-card-footer">
        <a href={props.item.link}>
          <h3 className="footer_card footer-title">{props.item.name}</h3>
        </a>
        <p className="footer_card  footer-description">
          {props.item.description}
        </p>
        <p className="footer_card  footer-stack">{props.item.stack}</p>
      </div>
    </div>
  );
}

export default ProjectItem;
