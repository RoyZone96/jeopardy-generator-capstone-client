import React, { Component } from 'react'
import { Data } from "../components/dummy-store"
import { Link } from "react-router-dom"
import config from '../config'


export default class PlayQuestion extends Component {
    state = {
        isShown: false,
        question_text: "",
        question_answer:""
    }

    componentDidMount(){
      fetch(`${config.API_ENDPOINT}/question/${this.props.match.params.id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
        })
        .then((res) => {
            this.setState({
                question_text: res.question_text,
                question_answer: res.question_answer
            })
        })
    }

    toggleState = () => {
        this.setState({
            isShown: !this.state.isShown 
        });
    }


    render() {
        let { category, value, id } = this.props.match.params
        category = category.replace(/-/g, " ")
        let cat = Data.data[id - 1].questions[value / 100 - 1]
        return (
            <div>
              <Link to="/play">
                <button type="button">BACK</button>
              </Link>
              <div>
                <div className="wrapper">
                  <p>{cat.question}</p>
                </div>
                {this.state.isShown && (
                  <div className="wrapper">
                    <p>What is <p className="answer">{cat.answer}</p> ?</p>
                  </div>
                )}
                <div>
                  <button type="button" onClick={this.toggleState}>
                    Reveal
                  </button>
                </div>
              </div>
            </div>
          );
    }
}