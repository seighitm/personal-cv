import React from 'react';
import './services.css'
import PropTypes from "prop-types";
import {serviceDescription} from "./staticInfo";

const Service = ({title, icon}) => {
    return (
        <div className="services__content">
            <i className={`bx ${icon} services__icon`}/>
            <h3 className="services__title">{title}</h3>
            <p className="services__description">{serviceDescription}</p>
        </div>
    );
};

Service.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

Service.defaultProps = {title: '', type: ''}

export default Service;