import React from 'react';
import aboutImg from "../../assets/img/work1.jpg"
import './aboutme.css'
import AboutMeInfo from "./AboutMeInfo";
import {aboutDescription} from "./staticInfo";

const AboutMe = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section-title">About Me</h2>
            <div className="about__container bd-grid">
                <div className="about__data">
                    <p className="about__description">{aboutDescription}</p>
                    <img src={aboutImg} alt="" className="about__img"/>
                </div>
                <div className="about__totalization">
                    <div className="about__information">
                        <h3 className="about__information-title">Information</h3>
                        <AboutMeInfo icon='bx-user' subTitle='Seighit Mihail'/>
                        <AboutMeInfo icon='bx-phone' subTitle='999-888-777'/>
                        <AboutMeInfo icon='bx-envelope'>
                            <a href='mailto:mseighit@gmail.com'>mseighit@gmail.com</a>
                        </AboutMeInfo>
                    </div>
                    <div className="about__information">
                        <h3 className="about__information-title">Experience and support</h3>
                        <AboutMeInfo icon='bx-medal' subTitle='Experience'/>
                        <AboutMeInfo icon='bx-briefcase' subTitle='Projects'/>
                        <AboutMeInfo icon='bx-support' subTitle='Support'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;