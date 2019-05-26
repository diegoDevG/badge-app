import React from 'react';
import { Link } from 'react-router-dom';

// import './styles/BadgesList.css';


const BadgesListItem = (props) => {

    const { name, lastName, twitter, job } = props.badge

    return (
        <div className="BadgesListItem">
            <img
                className="BadgesListItem__avatar"
                src={`https://i.pravatar.cc/100?img=${props.avatarId}`}
                alt={`${name} ${lastName}`}
            />

            <div>
                <strong>
                    {name} {lastName}
                </strong>
                <br />@{twitter}
                <br />
                {job}
            </div>
        </div>
    );

}





const BadgesList = (props) => {
    const badges = props.badges.payload

    const [query, setQuery] = React.useState(" ")

    const filteredBadges = badges.filter(badge => {
        return `${badge.name} ${badge.lastName}`.toLowerCase().includes(query)
    })

    if (filteredBadges.length === 0) {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="">Filter Badges </label>
                    <input type="text" className="form-control"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}
                    />
                </div>
                <h3>No badges were found</h3>
                <Link className="btn btn-primary" to="/new-badge">
                    Create new badge
              </Link>
            </div>
        );
    }

    return (
        <div className="BadgesList">
            <div className="form-group">
                <label >Filter Badges </label>
                <input
                    type="text"
                    className="form-control"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                />
            </div>
            <ul className="list-unstyled">
                {filteredBadges.map((badge, index) => {
                    return (
                        <li key={index}>
                            <Link className="text-reset text-decoration-none" to={`/edit-badge/${badge._id}`} >
                                <BadgesListItem badge={badge} avatarId={index} />
                            </Link>

                        </li>
                    );
                })}
            </ul>
        </div>
    );
}




export default BadgesList;