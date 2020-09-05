import React from 'react'
import { Link } from 'react-router-dom'
import './select.scss'
export default class Select extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Select</h2>
        <div>
          <Link to={'/recommend'}>Recommend Page</Link>
        </div>
      </div>
    )
  }
}
