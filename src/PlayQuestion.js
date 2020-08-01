import React, { Component } from 'react'
import ApiContext from './ApiContext'
import { Data } from "./dummy-store"
import { Link } from "react-router-dom"


export default class PlayQuestion extends Component {
  
    state = {
            answer: {
                show: false
            }
        }
    

    
    // static contextType = ApiContext 

    toggleState = event => {
        this.setState({
          answer: { show: !this.state.show }
        });
      }
      
    
      handleClick = (event) => {
        event.preventDefault();
       
        const { answer } = event.target
        console.log(answer.value)
        console.log(this.props.match.params.value)

         
      }
    


    render() {
        

        let { category, value, id, show} = this.props.match.params
        category = category.replace( /-/g, " ")
        let cat = Data.data[id-1].questions[value/100-1]
        console.log(cat)
        return (
            <div>
                <Link to='/play'><button type="button">BACK</button></Link>
                <form onSubmit={ this.handleSubmit }>
                    <div className="wrapper">
                        <p>{cat.question}
                    </p>
                    </div>
                    <div className="wrapper">
                        <label htmlFor="Answer"> What is </label>
                        <input type="text" placeholder="Answer" name="answer" required />
                    </div>
                    <div>
                        <button type="button" onClick={this.toggleState}>Reveal</button>
                    </div>
                </form>
            </div >
        )
    }
}