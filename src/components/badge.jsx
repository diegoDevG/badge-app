import React from 'react';
import logo from '../images/badge-header.svg'
import '../styles/badge.css'

const Badge = props => {

    const { firstName, lastName, avatar, rol, user } = props
    return (
        <div className="Badge">
            <div className="Badge__header" >
                <img src={logo} alt="" />
            </div>

            <div className="Badge__section-name">
                <img className="Badge__avatar" src={avatar} alt={firstName} />
                <h1>{firstName} <br /> {lastName}</h1>
            </div>
            <div className="Badge__section-info">
                <h3>{rol}</h3>
                <div>@{user}</div>
            </div>
            <div className="Badge__footer">#platziconf</div>
        </div>
    )


}

export default Badge

