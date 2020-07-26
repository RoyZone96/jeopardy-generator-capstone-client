import React, { Component } from 'react'

export default class SupportForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            subject: '',
            content: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    handleSubmit(event) {
       
        event.preventDefault();
         alert('Thank you for your submission. The admin will look over this as soon as possible')
    }

    render() {
        return (
            <div>
                <form>
                    <div className="wrapper">
                        <input type="email" className="email" placeholder="E-mail" required />
                    </div>
                    <div className="wrapper">
                        <input type="text" className="subject" placeholder="Subject" required />
                    </div>
                    <div className="wrapper">
                        <textarea value={this.state.content} onChange={this.handleChange} className="content" placeholder="Your content here" required />
                    </div>
                    <div className="wrapper">
                        <button type="submit" onClick={this.handleSubmit}>
                            Submit
                </button>
                    </div>
                </form>
            </div>
        )
    }
}