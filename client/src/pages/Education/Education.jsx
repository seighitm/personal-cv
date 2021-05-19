import React from 'react';
import Item from "./Item";
import './education.css'

const Education = () => {
    return (
        <section className="section education" id="education">
            <h2 className="section-title">My education</h2>
            <div className="education__container">
                <Item period='2018 - 2022' university='Polytechnic University of Timisoara'
                      specialty='Faculty of Computer Science'/>
                <Item period='2014 - 2018' university='College of Microelectronic and Computing Technique'
                      specialty='Telecommunications'/>
                <Item period='2018 - 2022' university='Gymnasium "Mihai Viteazul'/>
            </div>
        </section>
    );
};

export default Education;