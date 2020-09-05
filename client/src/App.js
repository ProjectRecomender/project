import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Landing from './components/Landing'
import Recommendations from './components/Recommendations.js'
import Select from './components/Select'
import Recommend from './components/Recommend'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/recommend" component={Recommend} />
        <Route exact path="/recommendapi" component={Recommendations} />
        <Route exact path="/select" component={Select} />
      </Switch>
    </Router>
  )
}

export default App
