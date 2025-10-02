import React from "react";
import dashboardImg from '../assets/images/dashboard.svg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Featured Project</h1>
        <div className="projects-grid">
            <div className="project">
                <div className="project-image">
                    <img src={dashboardImg} className="zoom" alt="Data Analytics Dashboard thumbnail" width="100%"/>
                </div>
                <h2>Data Analytics Dashboard</h2>
                <p>Template project showcasing data visualization and business intelligence capabilities. Built with Power BI, SQL, and Python for comprehensive data analysis and reporting.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;