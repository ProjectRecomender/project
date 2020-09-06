import React from 'react'
import { Link } from 'react-router-dom'
import db from '../../firebase.js'
import { Button } from 'reactstrap'
import Waves from '../waves'

import './select.scss'
export default class Select extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [
        { id: 0, query: 'You have an eye for interacting with machines' },
        { id: 1, query: 'You are fascinated by what mobile phones can do' },
        {
          id: 2,
          query: 'You love to browse websites and think how they function',
        },
        { id: 3, query: 'You keep thinking about puzzles and solving them' },
        { id: 4, query: 'You want to make machines do your work' },
        { id: 5, query: 'You like to see or discover patterns' },
        {
          id: 6,
          query:
            'Tinkering around the internet to see how it works is second nature to you',
        },
        { id: 7, query: 'You are fascinated by serverless technology' },
        {
          id: 8,
          query: 'Everything can be connected to everything else is your motto',
        },
        { id: 9, query: 'You want your computer to automate all your tasks' },
      ],
      answered: [],
    }
  }

  handleSubmit = () => {
    const { answered } = this.state
    console.log(answered)
    db.collection('data')
      .doc('doc')
      .set({
        answered,
      })
      .then(function () {
        console.log('Document successfully written!')
      })
      .catch(function (error) {
        console.error('Error writing document: ', error)
      })
  }

  handleChange = (id, value) => {
    this.remId(id, value)
  }

  remId = (id, value) => {
    const { answered } = this.state
    this.setState(
      {
        answered: answered.filter((ans) => {
          return ans.id !== id
        }),
      },
      () => this.addId(id, value)
    )
  }

  addId = (id, value) => {
    const { answered } = this.state
    this.setState({ answered: [...answered, { id, value }] })
  }

  render() {
    return (
      <>
        <div className="container">
          <h1>Find your Tech !</h1>
          {this.state.questions.map((question, idx) => {
            return (
              <div className="qnBox row pt-2 pb-2 border" key={idx}>
                <div className="col-6 onset-1 " style={{ textAlign: 'left' }}>
                  {question.query}
                </div>
                <div className="col-6 qnBox-cb">
                  <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-success outline">
                      <input
                        type="radio"
                        name={idx}
                        id="option1"
                        autocomplete="off"
                        onChange={() => this.handleChange(question.id, 0.99)}
                      />{' '}
                      Agree
                    </label>
                    <label class="btn btn-dark">
                      <input
                        type="radio"
                        name={idx}
                        id="option2"
                        autocomplete="off"
                        onChange={() => this.handleChange(question.id, 0.5)}
                      />{' '}
                      Neutral
                    </label>
                    <label class="btn btn-danger">
                      <input
                        type="radio"
                        name={idx}
                        id="option3"
                        autocomplete="off"
                        onChange={() => this.handleChange(question.id, 0.01)}
                      />{' '}
                      Disagree
                    </label>
                  </div>
                </div>
              </div>
            )
          })}

          {/* SUBMIT */}
          <Button
            success
            outline
            className="col-5 mt-2 mb-2"
            onClick={() => this.handleSubmit()}
          >
            <Link to={'/recommend'}>Submit and get recommendations!</Link>
          </Button>
        </div>
        <Waves />
      </>
    )
  }
}
