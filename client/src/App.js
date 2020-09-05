import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/Landing";
import Recommendations from "./components/Recommendations.js";

function App() {
  return (
        <Router>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/recommend' component={Recommendations} />
            </Switch>
        </Router>
  );
}

export default App;
