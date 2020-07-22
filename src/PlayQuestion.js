import React from 'react'

export default function PlayQuestion(props) {
    return (
        <div>
            <form>
                <div className="wrapper">
                    <p>LOREM IPSUM
                    Question Here.
                    </p>
                </div>
                <div className="wrapper">
                    <label htmlFor="Question"> What is </label>
                    <input type="text" placeholder="Question" required />
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