import React from 'react';
import './skills.css'
import Skill from "./Skill";
import {skills} from "../../utils/constants";

const Skills = () => {
    return (
        <section className="main skills_section section" id="skills">
            <h2 className="section-title">My expertise area</h2>
            <div className="skills__container bd-grid">
                <div className="skills__content">
                    <h3 className="skills__subtitle">Frontend</h3>
                    {skills[0].map(({technologies, skill}) =>
                        <Skill key={`${technologies}_${skill}`} skill={skill} name={technologies}/>
                    )}
                </div>
                <div className="skills__content">
                    <h3 className="skills__subtitle">Backend</h3>
                    {skills[1].map(({technologies, skill}) =>
                        <Skill key={`${technologies}_${skill}`} skill={skill} name={technologies}/>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Skills;