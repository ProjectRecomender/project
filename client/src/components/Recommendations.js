import React, { memo, useState, useEffect } from 'react'
import RecommendationCard from './RecommendationCard'
import { render } from '@testing-library/react'
import db from '../firebase'
import { Spinner } from 'reactstrap'

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
          <Spinner></Spinner>
          {}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#1da5aa"
              fillOpacity="1"
              d="M0,96L18.5,96C36.9,96,74,96,111,133.3C147.7,171,185,245,222,272C258.5,299,295,277,332,245.3C369.2,213,406,171,443,133.3C480,96,517,64,554,74.7C590.8,85,628,139,665,154.7C701.5,171,738,149,775,165.3C812.3,181,849,235,886,234.7C923.1,235,960,181,997,165.3C1033.8,149,1071,171,1108,192C1144.6,213,1182,235,1218,250.7C1255.4,267,1292,277,1329,256C1366.2,235,1403,181,1422,154.7L1440,128L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
            ></path>
          </svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#1da5aa"
              fillOpacity="1"
              d="M0,96L18.5,96C36.9,96,74,96,111,133.3C147.7,171,185,245,222,272C258.5,299,295,277,332,245.3C369.2,213,406,171,443,133.3C480,96,517,64,554,74.7C590.8,85,628,139,665,154.7C701.5,171,738,149,775,165.3C812.3,181,849,235,886,234.7C923.1,235,960,181,997,165.3C1033.8,149,1071,171,1108,192C1144.6,213,1182,235,1218,250.7C1255.4,267,1292,277,1329,256C1366.2,235,1403,181,1422,154.7L1440,128L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
            ></path>
          </svg>
        </div>
      )
    }
  }
}

export default Recommendations
