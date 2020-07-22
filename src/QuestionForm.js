import React from 'react'


export default function QuestionForm(props) {
  const { className, ...otherProps } = props
  return (
    <section>
      <form>
        <div className="wrapper">
        <textarea value={this.state.content} onChange={this.handleChange} placeholder="Your content here" required />
        </div>
        <div className="wrapper">
          <label htmlFor="Question"> What is </label>
          <input type="text" placeholder="Question" required />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div className="error">
          <p> Error message shown here. </p>
        </div>
      </form>
    </section>
  )
}