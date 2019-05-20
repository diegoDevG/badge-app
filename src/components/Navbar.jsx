import React from 'react';
import logo from '../images/logo.svg';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link className="Navbar__brand" to="/">
                <img className="Navbar__brand-logo" src={logo} alt="Logo" />
                <span>Platzi</span>
                <strong>Conf</strong>
            </Link>
        </div>
    )
}

export default Navbar