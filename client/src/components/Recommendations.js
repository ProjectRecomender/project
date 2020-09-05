import React, { memo,useState, useEffect } from 'react';
import RecommendationCard from "./RecommendationCard";
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
        <div>
        <h1>Your Recommendation</h1>
            <div className ="row">

            {categories !== null && categories.map((category) => {
                return <div className="col-lg-4"><RecommendationCard field={category}/></div>
            })}
        </div>
        </div>
       
    );
});

export default Recommendations;