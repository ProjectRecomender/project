import React from 'react'
import { Link } from 'react-router-dom'
import './select.scss'
export default class Select extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [
        { query: 'You have an eye for design' },
        { query: 'You have attention to detail ' },
        { query: 'You like to identify new ways to improve a company or project',},
        { query: 'You like to analyze data' },
        { query: 'You like to see or discover patterns' },
        { query: 'You like to manage projects ' },
        { query: 'You like to lead' },
      ],
      answered: [],
    }
  }

  handleCheckBox(query) {
    const { answered } = this.state
    if (answered.includes(query)) {
      this.setState({
        answered: answered.filter((e) => {
          return e !== query
        }),
      })
    } else {
      this.setState({ answered: [...answered, query] })
    }
  }

  render() {
    return (
      <div className="container">
        <h2>Select</h2>
        {this.state.questions.map((question, idx) => {
          return (
            <div className="qnBox row pt-2 pb-2 border" key={idx}>
              <div className="col-10 ">{question.query}</div>
              <div className="col-1 border mr-1 qnBox-cb">
                <input
                  type="checkbox"
                  aria-label="Checkbox"
                  onChange={() => this.handleCheckBox(question.query)}
                />
              </div>
            </div>
          )
        })}
        <footer>
          <Link to={'/recommend'}>Recommend Page</Link>
        </footer>
      </div>
    )
  }
}
