import React from 'react';
import ReactTooltip from "react-tooltip";
import PropTypes from "prop-types";

const Input = ({typeValidation, inputType, name}) => {
    let id = Math.random().toString(36).substr(2, 9)

    return (
        <div style={{display: "flex"}}>
            <input value={inputType.value} onBlur={e => inputType.onBlur(e)} onChange={e => inputType.onChange(e)}
                   type="text" id="name" placeholder={name} name='email' className="contact__input"/>
            {inputType.isDirty && <div className='tooltip-error'>
                <div className="tooltip" style={{display: inputType.inputValid ? 'none' : 'block'}}>
                    <div data-tip='' data-for={id}><i className='bx bx-error'/></div>
                    <ReactTooltip id={id} place="right" type="dark" textColor='red' backgroundColor='#f2f2f2'
                                  effect="float"
                                  html={true}
                                  multiline={true}
                                  children={typeValidation}
                    />
                </div>
            </div>}
        </div>
    );
};

Input.propTypes = {
    typeValidation: PropTypes.string.isRequired,
    inputType: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
};

Input.defaultProps = {typeValidation: {}, inputType: '', name: ''}

export default Input;