import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Badges.css';
import logo from '../images/badge-header.svg';
import { Link } from 'react-router-dom';

const Badge = () => {


    return (
        <div>
            <div className="Badges">
                <div className="Badges__hero">
                    <div className="Badges__container">
                        <img src={logo} alt="" className="Badges__conf-logo" />
                    </div>
                </div>
            </div>

            <div className="Badge__container">
                <div className="Bages__buttons">
                    <Link to="/new-badge" className="btn btn-primary">
                        New Badge</Link>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <div className="list-unstyled">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Badge