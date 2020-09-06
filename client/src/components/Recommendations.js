import React, { memo,useState, useEffect } from 'react';
import RecommendationCard from "./RecommendationCard";
import Waves from "./waves";
import api from "../utils/api"
const Recommendations = memo(() => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
       const getResult = async () => {
       const results = await api.get('/recommend');
       console.log("s")
      console.log(results.data);
      setCategories([...results.data]);
    };
    getResult();
  }, []);

    return (
        <div className="recommendation">
        <h1>Your Recommendation</h1>
            <div className ="row">

            {categories !== null && categories.map((category) => {
                return <div className="col-lg-4"><RecommendationCard field={category}/></div>
            })}
        </div>
        <Waves />
        </div>
       
    );
});

export default Recommendations;