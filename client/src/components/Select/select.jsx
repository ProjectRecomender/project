import React from 'react'
import { Link } from 'react-router-dom'
import db from '../../firebase.js'
import {Button} from "reactstrap";
import Waves from "../waves";

export default class Select extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [
        { id: 0, query: 'You have an eye for design' },
        { id: 1, query: 'You have attention to detail' },
        {
          id: 2,
          query:
            'You like to identify new ways to improve a company or project',
        },
        { id: 3, query: 'You like to analyze data' },
        { id: 4, query: 'You like to see or discover patterns' },
        { id: 5, query: 'You like to manage projects ' },
        { id: 6, query: 'You like to lead' },
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
    const { answered } = this.state
    const obj = {
      id,
      value,
    }
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
              <div className="col-6 onset-1 " style={{ "textAlign" : "left"}}>{question.query}</div>
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
        <div className="submitButton">   <Button outline color="success"
          onClick={() => this.handleSubmit()}
        >
           Let's Go !
        </Button></div>
     
      </div>
            <Waves/>
            </>

    )
  }
}
