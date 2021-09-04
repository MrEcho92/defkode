import React from "react";
import Header from "../Header/Header.component";
import "./Nav.styles.css";

const Nav = () => {
  return (
    <div className="nav-bar">
      <h1 class="nav-bar-logo">defkode</h1>
      <Header />
      <a className='header-item' href='#contact'>contact</a>
    </div>
  );
};

export default Nav;
