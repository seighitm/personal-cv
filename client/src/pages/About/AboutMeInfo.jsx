import React from 'react';
import PropTypes from "prop-types";

const AboutMeInfo = ({icon, subTitle, children}) => {
    return (
        <div className="about__information-data">
            <i className={`bx ${icon} about__information-icon`}/>
            <span>{subTitle}{children}</span>
        </div>
    );
};

AboutMeInfo.propTypes = {
    icon: PropTypes.string,
    subTitle: PropTypes.string
};

AboutMeInfo.defaultProps = {icon: '', subTitle: ''}

export default AboutMeInfo;