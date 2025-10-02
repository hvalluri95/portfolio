import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Main.scss';
import hariniImg from '../assets/images/harini.jpeg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={hariniImg} alt="Harini Valluri" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/hvalluri95" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/harini-valluri" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Harini Valluri</h1>
          <p>Senior Data Analyst</p>
          <div className="professional-summary">
            <p>Detail-oriented and results-driven professional with a demonstrated history of working in the data strategy and analytics industry for over 6+ years. Skilled in problem-solving, data management framework, data storytelling, project management, business strategies, relationship building, influence, large-scale project delivery, decision-making, performance tuning, stakeholder engagement, and organizational design.</p>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/hvalluri95" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/harini-valluri" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;