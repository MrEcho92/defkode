import React from 'react';
import resume from "../../assets/CV- SE.pdf";
import './Header.styles.css';

const Header = () => {
    return (
        <nav className='header'>
            <a className='header-list' href='#work'>projects</a>`
            <a className='header-list' href='#skills'>skills</a>
            <a className='header-list' href={resume}>resume</a>
        </nav>
    )
}

export default Header;
