import React from 'react';
import aboutImg from "../../assets/img/work1.jpg"
import './aboutme.css'

const AboutMe = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section-title">About Me</h2>
            <div className="about__container bd-grid">
                <div className="about__data">
                    <p className="about__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                        aut
                        facere. Nesciunt earum quidem corporis obcaecati assumenda quaerat cum. Veniam eligendi
                        recusandae
                        rerum sunt aliquam quisquam? Eveniet magnam facere tempora ab optio amet minus laborum culpa!
                        Fugiat
                        dolor voluptatum, molestias ad veniam eos autem error eligendi iusto aliquid inventore
                        adipisci?</p>
                    <img src={aboutImg} alt="" className="about__img"/>
                </div>
                <div className="about__totalization">
                    <div className="about__information">
                        <h3 className="about__information-title">Information</h3>
                        <div className="about__information-data">
                            <i className='bx bx-user about__information-icon'/>
                            <span>Seighit Mihail</span>
                        </div>
                        <div className="about__information-data">
                            <i className='bx bx-phone about__information-icon'/>
                            <span>999-888-777</span>
                        </div>
                        <div className="about__information-data">
                            <i className='bx bx-envelope about__information-icon'/>
                            <a href='mailto:mseighit@gmail.com'>mseighit@gmail.com</a>
                        </div>
                    </div>
                    <div className="about__information">
                        <h3 className="about__information-title">Experience and support</h3>
                        <div className="about__information-data">
                            <i className='bx bx-medal about__information-icon'/>
                            <div>
                                <span className="about__information-subtitle">Experience</span>
                            </div>
                        </div>
                        <div className="about__information-data">
                            <i className='bx bx-briefcase about__information-icon'/>
                            <div>
                                <span className="about__information-subtitle">Projects</span>
                            </div>
                        </div>
                        <div className="about__information-data">
                            <i className='bx bx-support about__information-icon'/>
                            <div>
                                <span className="about__information-subtitle">Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;