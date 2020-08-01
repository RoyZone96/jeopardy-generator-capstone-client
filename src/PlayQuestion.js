import React, { Component } from 'react'
import { Data } from "./dummy-store"
import { Link } from "react-router-dom"


export default class PlayQuestion extends Component {
  
    state = {
            answer: {
                isShown: false
            }
        }
    


    toggleState(event){
        this.setState({
          answer: { isShown: !this.state.isShown }
        });
      }
      
    

    render() {
        let { category, value, id, isShown} = this.props.match.params
        category = category.replace( /-/g, " ")
        let cat = Data.data[id-1].questions[value/100-1]
        return (
            <div>
                <Link to='/play'><button type="button">BACK</button></Link>
                <div>
                    <div className="wrapper">
                        <p>{cat.question}
                    </p>
                    </div>
                    <div className="wrapper">
                        <p> What is <p className="answer">{cat.answer}</p> ?</p>
                    </div>
                    <div>
                        <button type="button" onClick={this.toggleState}>Reveal</button>
                    </div>
                </div>
            </div >
        )
    }
}