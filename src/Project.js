import React from "react";
import './main.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Project = ({ title, builttext, abouttext, icon, livelink, github, photo }) => {
    return (
        <div className="spotlight">
            <div className="content">
                <header className="major">
                    <h2>{title}</h2>
                </header>
                <p><b>Built with: </b>{builttext}</p>
                <p>{abouttext}</p>
                <ul className="actions">
                    <li><a href={livelink} target="_blank" className="button">
                        <img src={`/icons/${icon}.png`} className="icon" alt={'(icon)'}/> Live App</a>
                    </li>
                    <li><a href={github} target="_blank" className="button">
                        <FontAwesomeIcon icon={faGithub} />
                        View on Github </a></li>
                </ul>
            </div>
            <span className="image"><a href={livelink}><img
                src={`/images/${photo}.gif`}
                alt=""/></a></span>
        </div>
    )
}

export default Project;