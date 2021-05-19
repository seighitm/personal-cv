import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = () => {
    const [visible, setVisible] = useState(false)

    const onToggle = () => {
        setVisible(!visible)
    }

    useEffect(() => {

    }, [visible])

    return (
        <header className="header">
            <nav className="navbar">
                <NavLink to="/" className="nav-logo">Home</NavLink>
                <ul className={!visible ? 'nav-menu' : 'nav-menu act'} onClick={onToggle}>
                </ul>
                <div className="hamburger" onClick={onToggle}>
                    {[...Array(3)].map(() => <span className="bar"/>)}
                </div>
            </nav>
        </header>
    );
};

Navbar.propTypes = {
    activeCategory: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func
};

Navbar.defaultProps = {activeCategory: null, items: []}

export default Navbar;