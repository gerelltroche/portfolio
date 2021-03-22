import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faNodeJs, faGithub, faDocker, faAws } from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
    return (
        <section id="second" className="main special">
        <header className="major">
            <h2>Skills</h2>
            <p>The tools that make your ideas come to life<br/>
                </p>
        </header>
        <ul className="statistics">
            <li className="style1">
                <FontAwesomeIcon icon={faNodeJs} size={"lg"}/>
                <strong>Node.js</strong>
            </li>
            <li className="style2">
                ><FontAwesomeIcon icon={faJs} />
                <strong>JavaScript</strong>ES6
            </li>
            <li className="style3">
                <FontAwesomeIcon icon={faDocker} />
                <strong>Docker</strong>
            </li>
            <li className="style4">
                <FontAwesomeIcon icon={faGithub} />
                <strong>Version</strong> Control
            </li>
            <li className="style5">
                <FontAwesomeIcon icon={faAws} />
                <strong>Aws</strong>
            </li>
            <li className="style1">
                <span className="icon fa-gem"></span>
                <strong>1,024</strong> Nullam
            </li>
        </ul>
        <footer className="major">
            <ul className="actions special">
            </ul>
        </footer>
    </section>
    )
}

export default Skills