import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="container">
      <h2>HELLO!!!</h2>
      <div class="form">
        <Link to={'/select'}>Select Page</Link>
      </div>
    </div>
  )
}

export default Landing
