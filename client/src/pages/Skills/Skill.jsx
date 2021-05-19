import React from 'react';
import PropTypes from "prop-types";

const Skill = ({skill, name}) => {
    return (
        <div className="skills__data">
            <span className="skills__name">{name}</span>
            <span className="skills__number">{skill}</span>
            <span className="skills__bar" style={{width: skill}}/>
        </div>
    );
};

Skill.propTypes = {
    skill: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

Skill.defaultProps = {skill: '', name: ''}

export default Skill;