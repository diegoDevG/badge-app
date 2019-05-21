import React from 'react';
import '../styles/Badges.css';
import logo from '../images/badge-header.svg';
import { Link } from 'react-router-dom';

import api from '../api'
import BadgesList from '../components/BadgeList';
import Loader from '../components/Loader';

// const Badge = () => {
class Badge extends React.Component {
    state = {
        loading: true,
        data: undefined,
        error: null
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })

        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data })

        } catch (error) {
            this.setState({ loading: false, error })
        }
    }



    render() {

        if (this.state.loading) {
            return (
                <Loader />
            )
        }


        if (this.state.error) {
            return `Error: ${this.state.error.message}`
        }
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
                                <BadgesList badges={this.state.data} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




export default Badge