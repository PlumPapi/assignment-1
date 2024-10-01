import React from 'react';
import myImage from '../assets/me.jpg';
import resume from '../assets/resume.pdf';

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src={myImage} alt="Jaycob Branco" className="profile-img" />     
      <p>Hello! I'm Jaycob Branco, a web developer with experience in HTML, C#, Untity, Java, and Javascript</p>
      <a href={resume} download className="btn">Download My Resume</a>    </div>
  );
};

export default About;
