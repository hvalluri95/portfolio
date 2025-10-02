import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCloud, faIndustry } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "SQL",
    "Power BI",
    "Tableau",
    "Python",
    "R",
    "Advanced Excel",
    "Data Analysis",
    "Data Visualization",
    "Business Intelligence",
    "A/B Testing",
    "ETL"
];

const labelsSecond = [
    "Snowflake",
    "dbt",
    "Looker",
    "Amplitude",
    "Alteryx",
    "Power Apps",
    "Power Automate",
    "Rapid Miner",
    "Hadoop",
    "AWS Redshift",
    "Azure Databricks",
    "Apache Airflow"
];

const labelsThird = [
    "Healthcare",
    "E-commerce",
    "Retail",
    "Pharma",
    "Food",
    "Manufacturing",
    "Sales",
    "Supply Chain",
    "Logistics",
    "Financial Reporting",
    "B2B and B2C"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faChartLine} size="3x"/>
                    <h3>Data Analysis & Visualization</h3>
                    <p>Expert in data analysis, reporting, and visualization with 6+ years of experience. Skilled in SQL, Power BI, Tableau, Python, and R for extracting actionable insights from complex datasets.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <h3>Data Engineering & Cloud Platforms</h3>
                    <p>Proficient in data engineering, ETL pipelines, and cloud platforms. Experience with Snowflake, dbt, AWS Redshift, Azure Databricks, and Apache Airflow for scalable data solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faIndustry} size="3x"/>
                    <h3>Domain Expertise</h3>
                    <p>Extensive experience across multiple industries including Healthcare, E-commerce, Retail, Pharma, Manufacturing, and Financial Services. Proven track record in B2B and B2C analytics solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Domains:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;