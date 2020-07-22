import React, { Component } from 'react';


export default class LoginForm extends Component {



    render() {
        return (
            <div>
                <form>
                    <div className="wrapper">
                        <label htmlFor="username"> Username </label>
                        <input type="text" className="username" required />
                    </div>
                    <div className="wrapper">
                        <label htmlFor="password"> Password </label>
                        <input type="text" className="password" required />
                    </div>
                    <div className="wrapper">
                        <button type="button"> Login </button>
                        <button type="button"> Register </button>
                    </div>
                    <div className="error">
                        <p> Error Message goes here</p>
                    </div>
                </form>
            </div>
        )
    }



}