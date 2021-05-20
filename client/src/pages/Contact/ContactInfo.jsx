import React from 'react';
import PropTypes from "prop-types";

const ContactInfo = ({title, items}) => {
    return (
        <div className="contact__info">
            <h3 className="contact__subtitle">{title}</h3>
            {items.map(item => <span key={item} className="contact__text">{item}</span>)}
        </div>
    );
};

ContactInfo.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired
};

ContactInfo.defaultProps = {title: null, items: []}

export default ContactInfo;