import React from 'react';
import './skills.css'
import Skill from "./Skill";

const Skills = () => {
    const skills = {
        'html/css': '80%',
        'javascript': '90%',
        'react': '80%',
        'java': '80%',
        'node.js': '70%',
        'python': '50%',
        'express': '60%',
        'redux': '90%',
        'mongodb': '65%',
        'postgres (sequelize)': '80%',
        'typescript': '50%'
    }

    return (
        <section className="main skills_section section" id="skills">
            <h2 className="section-title">My expertise area</h2>
            <div className="skills__container bd-grid">
                <div className="skills__content">
                    <h3 className="skills__subtitle">Frontend</h3>
                    <Skill skill={skills["html/css"]} name='Html/Css'/>
                    <Skill skill={skills.react} name='React'/>
                    <Skill skill={skills.javascript} name='Javascript'/>
                    <Skill skill={skills.redux} name='Redux'/>
                    <Skill skill={skills.typescript} name='Typescript'/>
                </div>
                <div className="skills__content">
                    <h3 className="skills__subtitle">Backend</h3>
                    <Skill skill={skills["node.js"]} name='Node.js'/>
                    <Skill skill={skills["java"]} name='Java'/>
                    <Skill skill={skills.python} name='Python'/>
                    <Skill skill={skills.express} name='Express'/>
                    <Skill skill={skills.mongodb} name='MongoDB'/>
                    <Skill skill={skills["postgres (sequelize)"]} name='Postgres (Sequelize)'/>
                </div>
            </div>
        </section>
    );
};

export default Skills;