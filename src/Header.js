import React from "react";
import './main.css'
import logo from "./logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Header = () => {
    return (
        <header id="header" className="alt">
            <span className="logo">
                <img src={logo} className="App-logo" alt="logo" />
            </span>
            <h1>T. Gerell Troche</h1>
            <p>Software Engineer <br/>
                <a className={"icon brands"}> <FontAwesomeIcon icon={faGithub} /></a>
                <a className={"icon brands"}> <FontAwesomeIcon icon={faLinkedin} /></a>
            </p>
        </header>
    )
}

export default Header;