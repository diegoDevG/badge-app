import React from 'react';
import '../styles/Home.css'
import logo from '../images/astronauts.svg';
import logo2 from '../images/platziconf-logo.svg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="Home__Container">
            <div className="col-1">
            </div>
            <div className="col-3 intro">
                <img className="img-fluid" src={logo2} alt="" />
                <h1>Print your badges</h1>
                <h3>The easiest way to manage your conference</h3>
                <div className="Bages__buttons">
                    <Link to="/new-badge" className="btn btn-primary btn-lg">
                        Start Now</Link>
                </div>
            </div>


            <div className="col-8 logo">
                <img className="img-fluid" src={logo} alt="" />
            </div>

        </div>
    )
}

export default Home