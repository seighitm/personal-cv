import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import './navbar.css'

const Navbar = ({activeItem, setActiveItem, itemsNavbar, icons}) => {
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
                <div className="hamburger" onClick={onToggle}>
                    <i className='bx bx-menu'/>
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