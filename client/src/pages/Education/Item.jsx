import React from 'react';
import PropTypes from "prop-types";

const Item = ({period, university, specialty}) => {
    return (
        <div className="education__content">
            <div>
                <h3 className="education__year">{period}</h3>
            </div>
            <div className="education__time">
                <span className="education__rounder"/>
                <span className="education__line"/>
            </div>
            <div>
                <h3 className="education__university">{university}</h3>
                {specialty && <span className="education__specialty">{specialty}</span>}
            </div>
        </div>
    );
};

Item.propTypes = {
    period: PropTypes.string.isRequired,
    university: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired
};

Item.defaultProps = {period: '', university: '', specialty: ''}

export default Item;