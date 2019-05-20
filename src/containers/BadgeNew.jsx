import React from 'react';
import header from '../images/badge-header.svg';
import '../styles/BadgeNew.css';
import Badge from './../components/badge';
import BadgeForm from '../components/BadgeForm';


// const BadgeNew = () => {

class BadgeNew extends React.Component {

    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        },
        data: [
            {
                id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
                irstName: "Freda",
                lastName: "Grady",
                email: "Leann_Berge@gmail.com",
                jobTitle: "Legacy Brand Director",
                twitter: "FredaGrady22221-7573",
                avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
            },
            {
                id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                firstName: "Major",
                lastName: "Rodriguez",
                email: "Ilene66@hotmail.com",
                jobTitle: "Human Research Architect",
                twitter: "ajorRodriguez61545",
                avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
            },
            {
                id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                firstName: "Daphney",
                lastName: "Torphy",
                email: "Ron61@hotmail.com",
                jobTitle: "National Markets Officer",
                twitter: "DaphneyTorphy96105",
                avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
            }
        ]
    }

    handleInputChange = e => {
        console.log({ value: e.target.value })
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {

        const { firstName, lastName, email, jobTitle, twitter } = this.state.form
        return (
            <div>
                <div className="BadgeNew__hero">
                    <img src={header} alt="" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName={firstName}
                                lastName={lastName}
                                avatar="https://live.staticflickr.com/65535/33981716948_e8373bf1c3_b.jpg"
                                rol={jobTitle}
                                user={twitter} />
                        </div>
                        <div className="col">
                            <BadgeForm onChange={this.handleInputChange} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew