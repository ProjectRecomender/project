import React, { useState, useEffect } from 'react'
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap'
import axios from 'axios'

const RecommendationCard = ({ field }) => {
  const [repos, setrepos] = useState([])
  useEffect(() => {
    const getResult = async () => {
      const results = await axios.get(
        `https://api.github.com/search/repositories?q=${field}+learn&sort=stars`
      )
      console.log(results.data)
      setrepos([...results.data.items])
    }
    getResult()
  }, [field])

  var repositories = repos.slice(0, 4).map((repo, idx) => {
    return (
      <div className="repoButton" key={idx}>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          <Button color="success" outline block>
            {' '}
            {repo.name}
          </Button>{' '}
        </a>
      </div>
    )
  })
  return (
    <Card className="recommendationCard">
      <h2>{field}</h2>

      <CardText>To start you off here are some sample repositories</CardText>
      <CardBody>{repositories}</CardBody>
    </Card>
  )
}

export default RecommendationCard
