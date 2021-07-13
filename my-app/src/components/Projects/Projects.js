import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub  } from '@fortawesome/free-brands-svg-icons';

import './Projects.css';
import projects from './projects.json';

const Projects = () => {

    return (
        <div className="projects-section-main-container">
            <div className="projects-section-container">
                <div className="projects-header">
                    <div className="header-underline" />
                    <h1>Featured Projects</h1>
                    <p>I love building cool things to learn new technologies and create solutions to problems I have. Here are some of my most recent projects.</p>
                    <p>Click on the Github icon to view a project's source code.</p>
                </div>
                <div className="project-container">
                    {
                        projects.map(project => {
                            return (
                                <div className="project">
                                    <div className="project-details">
                                        <div className="project-title-github">
                                            <p className="project-title">{project.name}</p>
                                            <a href={project.github} >
                                                <FontAwesomeIcon icon={faGithub} className="project-github-icon" />
                                            </a>
                                        </div>
                                        <p className="project-subtitle">{project.subtitle}</p>
                                        <p className="description">{project.description}</p>
                                        <div className="technologies-container">
                                            {
                                                project.technologies.map(technology => {
                                                    return (
                                                        <div className="technologies">
                                                            <p>{technology}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects;