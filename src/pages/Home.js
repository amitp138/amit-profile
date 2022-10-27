import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Amit</h2>
        <div className="prompt">
          <p>A web developer with a passion for learning and creating.</p>
          <a target="_blank" rel="noreferrer" href="https://github.com/amitp138"><GithubIcon /></a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/amit-pandey-006b28240/"><LinkedInIcon /></a>
    
         <a href="mailto:amitpande1008@gmail.com"> <EmailIcon /></a>
          
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
             <ol>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>REACT JS</li>
              <li>BOOTSTRAP</li>
              <li>NODE JS</li>
              <li>MYSQL</li>
              <li>GITHUB</li>
              
             </ol>
            </span>
          </li>
         
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript,  C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
