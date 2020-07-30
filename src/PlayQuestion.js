import React, { Component } from 'react'
import ApiContext from './ApiContext'


export default class PlayQuestion extends Component {
  
    state = {
            answer: {
                value: ''
            },
        }
    

    
    // static contextType = ApiContext 

    submitAnswer = event => {
        this.setState({
          answer: { value: event.target.value }
        });
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
       
        const { answer } = event.target
        console.log(answer.value)
        console.log(this.props.match.params.value)

         // function checkSubmission(input) {
        //   const data = new FormData(event.target)
        // }
      }
    


    render() {
        // console.log(context.questions)
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <div className="wrapper">
                        <p>LOREM IPSUM
                        Question Here.
                    </p>
                    </div>
                    <div className="wrapper">
                        <label htmlFor="Answer"> What is </label>
                        <input type="text" placeholder="Answer" name="answer" required />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                    <div className="error">
                        <p> Correct Answer Here </p>
                    </div>
                </form>
            </div >
        )
    }
}