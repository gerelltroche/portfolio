import React from 'react';
import './main.css';
import projects from "./projects.json";

const Navigation = () => {
    return (
        <nav id="nav">
            <ul>
                <li><a href="#projects" className="active">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;