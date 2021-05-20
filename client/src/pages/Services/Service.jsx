import React from 'react';
import './services.css'
import PropTypes from "prop-types";

const Service = ({title, type}) => {
    return (
        <div className="services__content">
            {type === 'b'
                ? <i className="bx bx-server services__icon"/>
                : type === 'f' ? <i className="bx bx-code services__icon"/> : null
            }
            <h3 className="services__title">{title}</h3>
            <p className="services__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae
                laboriosam at, odio placeat architecto natus omnis dolor commodi soluta itaque veniam saepe est
                aperiam vitae debitis reiciendis sed nulla explicabo sit maiores iusto vero laborum. Laboriosam
                autem quod cumque quos!</p>
        </div>
    );
};

Service.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

Service.defaultProps = {title: '', type: ''}

export default Service;