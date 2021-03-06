import React from 'react';
import header from '../images/platziconf-logo.svg';
import '../styles/BadgeNew.css';
import Badge from './../components/badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import Loader from '../components/Loader';


// const BadgeNew = () => {

class EditBadge extends React.Component {

    state = {
        loading: true,
        error: null,
        form: {
            name: '',
            lastName: '',
            job: '',
            email: '',
            twitter: ''
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null })

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            console.log({ data })

            this.setState({ loading: false, form: data.payload })
        } catch (error) {
            this.setState({ loading: false, error })
        }
    }

    handleInputChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null })
        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({ loading: false })
            this.props.history.push('/badges')

        } catch (error) {
            this.setState({ loading: false, error })
        }
    }

    render() {

        if (this.state.loading) {
            return <Loader />
        }

        const randomAvatar = Math.floor((Math.random() * 60) + 1);

        const { name, lastName, job, email, twitter } = this.state.form
        return (
            <div>
                <div className="BadgeNew__hero">
                    <img src={header} alt="" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                name={name || 'First Name'}
                                lastName={lastName || 'Last Name'}
                                email={email}
                                avatar={`https://i.pravatar.cc/100?img=${randomAvatar}`}
                                job={job || 'Position'}
                                twitter={twitter || 'twitter'} />
                        </div>
                        <div className="col">
                            <h1>Edit Attendant</h1>
                            <BadgeForm
                                onChange={this.handleInputChange}
                                onSubmit={this.handleSubmit}
                                error={this.state.error}
                                name={name}
                                lastName={lastName}
                                email={email}
                                job={job}
                                twitter={twitter}
                            />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditBadge