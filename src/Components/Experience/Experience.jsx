import React, { useState } from 'react';
import './Experience.css';
import sap_logo from '../../assets/sap.jpg';
import nio_logo from '../../assets/nio.jpg';
import cubeai_logo from '../../assets/cubeai.jpg';

const experiences = [
    {
        company: "SAP Labs",
        date: "03/2024 - 06/2024",
        role: "Generative AI Intern",
        description: "Fine-tuned several small language models for business AI use cases in spend management to reduce computation cost.",
        achievement: "🏆 Achieved Exemplary Work in an Industrial Project.",
        image: sap_logo
    },
    {
        company: "NioDigital",
        date: "02/2024 - 04/2024",
        role: "Artificial Intelligence Intern",
        description: "Built RAG system, feedback collecting chatbot for Odoo using Rasa, sentiment analysis, topic modeling, and chat with SQL.",
        achievement: "",
        image: nio_logo
    },
    {
        company: "CubeAI Solutions",
        date: "08/2024 - 10/2024",
        role: "AI Intern",
        description: "Built AI-based resume filtering system, document summarization.",
        achievement: "",
        image: cubeai_logo
    }
];

const Experience = () => {
    const [expanded, setExpanded] = useState(Array(experiences.length).fill(false));

    const toggleExpand = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };

    return (
        <div id='experience' className="experience-container">
            <h1 className="experience-title">Experience</h1>
            <div className="experience-grid">
                {experiences.map((exp, index) => (
                    <div className="experience-card" key={index}>
                        <img src={exp.image} alt={exp.company} className="company-logo" />
                        <h2>{exp.company}</h2>
                        <p className="date">{exp.date}</p>
                        <h3>{exp.role}</h3>
                        <p className="description">{expanded[index] ? exp.description + " " + exp.achievement : exp.description.slice(0, 60) + "..."}</p>
                        <button className="show-more" onClick={() => toggleExpand(index)}>
                            {expanded[index] ? "Show Less" : "Show More"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
