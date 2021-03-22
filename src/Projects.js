import React from "react";
import './main.css';
import Project from './Project';

const Projects = ({ projects }) => {
    return (
        <div>
            <section id="projects" className="main">
                {projects.map(({ title, builttext, abouttext, icon, livelink, github, photo}) => (
                    <Project
                    title={title}
                    builttext={builttext}
                    abouttext={abouttext}
                    icon={icon}
                    livelink={livelink}
                    github={github}
                    photo={photo} />
                    ))
                }
            </section>
        </div>
    )
}

export default Projects