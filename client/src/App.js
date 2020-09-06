import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Landing from './components/Landing'
import Recommendations from './components/Recommendations.js'
import Select from './components/Select'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/recommend" component={Recommendations} />
        <Route exact path="/select" component={Select} />
      </Switch>
    </Router>
  )
}

export default App
