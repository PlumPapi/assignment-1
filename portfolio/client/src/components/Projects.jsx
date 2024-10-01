import React from 'react';
import project1 from  '../assets/project1.jpg';
import project2 from'../assets/project2.jpg';
import project3 from '../assets/project3.jpg';

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects">
        <img src={project1} alt="Project 1" />
        <h2>window forms</h2>
        <p>window forms application calculator using C#</p>
      </div>

      <div className="projects">
        <img src={project2} alt="Project 2" />
        <h2>drag and drop</h2>
        <p>created a drag and drop website using Javascript.</p>
      </div>

      <div className="projects">
        <img src={project3} alt="Project 3" />
        <h2>fruit website</h2>
        <p>created a website that updated based on the users imputs about fruit using Javascript.</p>
      </div>
    </div>
  );
};

export default Projects;
