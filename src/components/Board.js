import React from 'react'
import { Link } from 'react-router-dom'
import config from '../config'


export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category_one: "",
      category_two: "",
      category_three: "",
      category_four: "",
      category_five: "",
      category_six: ""
    }
  }


  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/boards/${this.props.match.params.id}`, {
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
          category_one: res.category_one,
          category_two: res.category_two,
          category_three: res.category_three,
          category_four: res.category_four,
          category_five: res.category_five,
          category_six: res.category_six
        })
      })
  }




  render() {
    const { category_one, category_two, category_three, category_four, category_five, category_six } = this.props.match;
    console.log(this.props.match)
    return (
      <main>
        <div>
          <Link to="/myboards"><button type="button">
            Back
          </button></Link>
        </div>
        <section>
          <div className="divTable">
            <div className="divTableBody">
              <div className="divTableRow">
                <div className="divTableCell"><h3>{category_one}</h3></div>
                <div className="divTableCell"><h3>{category_two}</h3></div>
                <div className="divTableCell"><h3>{category_three}</h3></div>
                <div className="divTableCell"><h3>{category_four}</h3></div>
                <div className="divTableCell"><h3>{category_five}</h3></div>
                <div className="divTableCell"><h3>{category_six}</h3></div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"><Link to="/question/100/1">100</Link></div>
                <div className="divTableCell"><Link to="/question/100/2">100</Link></div>
                <div className="divTableCell"><Link to="/question/100/3">100</Link></div>
                <div className="divTableCell"><Link to="/question/100/4">100</Link></div>
                <div className="divTableCell"><Link to="/question/100/5">100</Link></div>
                <div className="divTableCell"><Link to="/question/100/6">100</Link></div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"><Link to="/question/200/1">200</Link></div>
                <div className="divTableCell"><Link to="/question/200/2">200</Link></div>
                <div className="divTableCell"><Link to="/question/200/3">200</Link></div>
                <div className="divTableCell"><Link to="/question/200/4">200</Link></div>
                <div className="divTableCell"><Link to="/question/200/5">200</Link></div>
                <div className="divTableCell"><Link to="/question/200/6">200</Link></div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"><Link to="/question/300/1">300</Link></div>
                <div className="divTableCell"><Link to="/question/300/2">300</Link></div>
                <div className="divTableCell"><Link to="/question/300/3">300</Link></div>
                <div className="divTableCell"><Link to="/question/300/4">300</Link></div>
                <div className="divTableCell"><Link to="/question/300/5">300</Link></div>
                <div className="divTableCell"><Link to="/question/300/6">300</Link></div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"><Link to="/question/400/1">400</Link></div>
                <div className="divTableCell"><Link to="/question/400/2">400</Link></div>
                <div className="divTableCell"><Link to="/question/400/3">400</Link></div>
                <div className="divTableCell"><Link to="/question/400/4">400</Link></div>
                <div className="divTableCell"><Link to="/question/400/5">400</Link></div>
                <div className="divTableCell"><Link to="/question/400/6">400</Link></div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"><Link to="/question/500/1">500</Link></div>
                <div className="divTableCell"><Link to="/question/500/2">500</Link></div>
                <div className="divTableCell"><Link to="/question/500/3">500</Link></div>
                <div className="divTableCell"><Link to="/question/500/4">500</Link></div>
                <div className="divTableCell"><Link to="/question/500/5">500</Link></div>
                <div className="divTableCell"><Link to="/question/500/6">500</Link></div>
              </div>
            </div>
          </div>

        </section>
        <div>
          <button type="button" onClick={this.handleClickSubmit}>
            Submit
          </button>
        </div>

      </main>
    )
  }
}

