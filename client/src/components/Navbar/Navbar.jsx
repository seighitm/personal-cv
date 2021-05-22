import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import './navbar.css'

const Navbar = ({activeItem, setActiveItem, itemsNavbar, icons}) => {
    const [visible, setVisible] = useState(false)

    const onToggle = () => {
        setVisible(!visible)
    }

    return (
        <header className="header">
            <nav className="navbar">
                <NavLink to="/" className="nav-logo">HOME</NavLink>
                <ul className={!visible ? 'nav-menu' : 'nav-menu act'} onClick={onToggle}>
                    {itemsNavbar && itemsNavbar.map((item, index) =>
                        <li key={`${item}_${index}`} onClick={() => setActiveItem(index)}
                            className={activeItem === index ? 'nav-item active' : 'nav-item'}>
                            <div>
                                <NavLink to={item} className={'nav__link'}>
                                    <i className={`bx ${icons[index]}`}/>
                                    {item.toUpperCase()}
                                </NavLink>
                            </div>
                        </li>
                    )}
                </ul>
                <div className={!visible ? "hamburger" : "hamburger change"} onClick={onToggle}>
                    <div className='bar1'/>
                    <div className='bar2'/>
                    <div className='bar3'/>
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