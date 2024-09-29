import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects">
        <img src="/project1.png" alt="Project 1" />
        <h2>window forms</h2>
        <p>window forms application calculator using C#</p>
      </div>

      <div className="projects">
        <img src="/project2.png" alt="Project 2" />
        <h2>drag and drop</h2>
        <p>created a drag and drop website using Javascript.</p>
      </div>

      <div className="projects">
        <img src="/project3.png" alt="Project 3" />
        <h2>fruit website</h2>
        <p>created a website that updated based on the users imputs about fruit using Javascript.</p>
      </div>
    </div>
  );
};

export default Projects;
