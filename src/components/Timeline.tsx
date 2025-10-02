import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History & Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2022 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Data Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Ernst & Young LLP (EY) - Charlotte, NC</h4>
            <p>
              Data strategy, ETL pipeline optimization, Power BI/Tableau dashboards, Azure DevOps, SQL optimization, and stakeholder collaboration for global analytics initiatives.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2021 - Dec 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Science Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Entomo - Houston, TX</h4>
            <p>
              Machine Learning model development, lead conversion analysis, Python automation, and marketing data analysis for improved sales performance.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2021 - May 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Fusion Consulting - Dallas, TX</h4>
            <p>
              Incentive compensation analysis, BI report automation, KPI identification, and Python data validation for improved data quality.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2016 - Oct 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Business Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Infosys Technologies Ltd - Hyderabad, India</h4>
            <p>
              Global data analytics project leadership, Zendesk-Salesforce integration, data cleaning, statistical analysis, and Tableau dashboard development for sales teams.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Dec 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">M.S. in Information Technology and Management</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Texas at Dallas (UTD) - USA</h4>
            <p>
              BI & Data Analytics | Dean's Impact Scholarship | GPA: 4.0
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2016"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech. in Electronics & Computer Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">JNTUH College of Engineering - Hyderabad, India</h4>
            <p>
              Gold Medalist, Rank 1 | GPA: 3.93
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;