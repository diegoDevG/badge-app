import React from 'react';
import { Link } from 'react-router-dom';

// import './styles/BadgesList.css';

class BadgesListItem extends React.Component {
    render() {
        console.log(this.props);

        return (
            <div className="BadgesListItem">
                <img
                    className="BadgesListItem__avatar"
                    src={`https://i.pravatar.cc/100?img=${this.props.avatarId}`}
                    alt={`${this.props.badge.name} ${this.props.badge.lastName}`}
                />

                <div>
                    <strong>
                        {this.props.badge.name} {this.props.badge.lastName}
                    </strong>
                    <br />{this.props.badge.twitter}
                    <br />
                    {this.props.badge.job}
                </div>
            </div>
        );
    }
}

class BadgesList extends React.Component {
    render() {

        console.log(this.props);


        if (this.props.badges.length === 0) {
            return (
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/new-badge">
                        Create new badge
          </Link>
                </div>
            );
        }


        return (
            <div className="BadgesList">
                <ul className="list-unstyled">
                    {this.props.badges.payload.map((badge, index) => {
                        return (
                            <li key={index}>
                                <BadgesListItem badge={badge} avatarId={index} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default BadgesList;