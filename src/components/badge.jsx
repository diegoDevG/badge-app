import React from 'react';
import logo from '../images/badge-header.svg'
import '../styles/badge.css'

const Badge = props => {

    const { name, lastName, avatar, job, twitter } = props
    return (
        <div className="Badge">
            <div className="Badge__header" >
                <img src={logo} alt="" />
            </div>

            <div className="Badge__section-name">
                <img className="Badge__avatar" src={avatar} alt={name} />
                <h1>{name} <br /> {lastName}</h1>
            </div>
            <div className="Badge__section-info">
                <h3>{job}</h3>
                <div>@{twitter}</div>
            </div>
            <div className="Badge__footer">#platziconf</div>
        </div>
    )


}

export default Badge

