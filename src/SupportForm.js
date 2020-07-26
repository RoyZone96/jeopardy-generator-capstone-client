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
         const { email, subject, content } = event.target;
         console.log('email:', email.value, 'subject:', subject.value, 'content', content.value);
    }

    render() {
        return (
            <div>
                <form onSubmit = { this.handleSubmit }>
                    <div className="wrapper">
                        <input type="email" className="email" name="email" placeholder="E-mail" required />
                    </div>
                    <div className="wrapper">
                        <input type="text" className="subject" name="subject" placeholder="Subject" required />
                    </div>
                    <div className="wrapper">
                        <textarea  name="content" onChange={this.handleChange} className="content" placeholder="Your content here" required />
                    </div>
                    <div className="wrapper">
                        <button type="submit">
                            Submit
                </button>
                    </div>
                </form>
            </div>
        )
    }
}