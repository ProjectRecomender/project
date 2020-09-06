import React, { memo, useState, useEffect } from 'react'
import RecommendationCard from './RecommendationCard'
import { render } from '@testing-library/react'
import db from '../firebase'
import { Spinner } from 'reactstrap'
import Waves from "./waves"

class Recommendations extends React.Component {
  // const [categories, setCategories] = useState([])
  // useEffect(() => {
  //   const getResult = async () => {
  //     const results = await api.get('/recommend')
  //     console.log('s')
  //     console.log(results.data)
  //     setCategories([...results.data])
  //   }
  //   getResult()
  // }, [])

  constructor(props) {
    super(props)
    this.state = {
      cmap: [
        { category: 'Web Development' },
        { category: 'Internet of Things' },
        { category: 'Machine Learning' },
        { category: 'VR' },
        { category: 'Scripting' },
        { category: 'Web security' },
        { category: 'Android dev' },
      ],
      categories: [],
      count: 0,
    }
  }
  componentDidMount() {
    const { categories, cmap, count } = this.state
    db.collection('data')
      .doc('responses')
      .onSnapshot((doc) => {
        console.log(doc.data())

        // if data can be a list of classes we can do a doc.data().map here.
        this.setState(
          {
            categories: [...categories, cmap[doc.data().class].category],
            count: count + 1,
          },
          () => console.log(categories)
        )
      })
  }
  render() {
    const { categories, count } = this.state
    const timer = setTimeout(() => this.setState({ count: count + 1 }), 3000)

    if (count === 2) {
      clearTimeout(timer)
    }

    if (count < 2) {
      return (
        <div className="recommendation">
          <h3>Loading your recommendations...</h3>
          <Spinner/>
          {}
          <Waves/>
        </div>
      )
    } else {
      return (
        <div className="recommendation">
          <h1>Your Recommendations</h1>
          <div className="row">
            {categories !== null &&
              categories.map((category, idx) => {
                return (
                  <div className="col-lg-4" key={idx}>
                    <RecommendationCard field={category} />
                  </div>
                )
              })}
          </div>
            <Waves/>
        </div>
      )
    }
  }
}

export default Recommendations
