import React from 'react'
import { Link } from 'react-router-dom'
import Waves from "./waves";
import {Button} from "reactstrap";
const Landing = () => {
  return (
  <div className="container landing">
   <div className = "row">
      <div className="col-lg-6 intro">
         <h1>Feeling bemused about which field to go ?</h1>
         <h2>Don't Worry ProjectGlimpse got you covered</h2>
         <p>Head start your journey with the click of a button.</p>
                  <div className="home-btn">   <Link to={'/select'}>
         <Button color="primary" size="lg" outline>Head Here</Button></Link>
         <br/>
          <span id="spin" /></div>

      

      </div>
      <div className="col-lg-6">
         <img  src="./image2.jpg" alt="computer" className="octopus"/>
      </div>
   </div>
   <Waves/>
</div>
  )
}

export default Landing
