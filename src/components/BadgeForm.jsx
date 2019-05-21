import React from 'react';

const BadgeForm = (props) => {

    // const handleInputChange = e => {
    //     console.log({ value: e.target.value })
    // }

    // const hadleSubmitButton = (event) => {
    //     event.preventDefault()
    //     console.log('clicked');
    // }

    return (
        <div>
            <h1>New Attendant</h1>

            <form onSubmit={props.onSubmit}>
                <div className="form-group">
                    <label htmlFor="">FirstName</label>
                    <input onChange={props.onChange} className="form-control" type="text" name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="">lastName</label>
                    <input onChange={props.onChange} className="form-control" type="text" name="lastName" />
                </div>
                <div className="form-group">
                    <label htmlFor="">email</label>
                    <input onChange={props.onChange} className="form-control" type="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Job Title</label>
                    <input onChange={props.onChange} className="form-control" type="text" name="job" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Twitter</label>
                    <input onChange={props.onChange} className="form-control" type="text" name="twitter" />
                </div>
                <button type="submit" className="btn btn-primary" >Save </button>
                {props.error && <p>{props.error.message}</p>}
            </form>


        </div>

    )
}

export default BadgeForm