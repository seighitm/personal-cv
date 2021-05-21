import React from 'react';
import Service from "./Service";
import './services.css'

const Services = () => {
    return (
        <section className="services section" id="services">
            <h2 className="section-title">My Services</h2>
            <div className="services__container bd-grid">
                <Service title='Frontend Developer' icon='bx-code'/>
                <Service title='Backend Development' icon='bx-server'/>
            </div>
        </section>
    );
};

export default Services;