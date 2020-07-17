import React, { Component } from 'react'


export default class RegistrationPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            confirm_password: '',
            email: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit = e => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username
                    <input type="text" value={this.state.value} onSubmit={this.handleSubmit} required />
                    </label>
                    <label>
                        Password
                    <input type="text" value={this.state.value} onSubmit={this.handleSubmit} required />
                    </label>
                    <label>
                        Confirm Password
                    <input type="text" value={this.state.value} onSubmit={this.handleSubmit} required />
                    </label>
                    <label>
                        E-mail
                    <input type="text" value={this.state.value} onSubmit={this.handleSubmit} required />
                    </label>
                </form>
                <a href="">Already have an account? Login in here.</a>
            </div>
        )
    }
}