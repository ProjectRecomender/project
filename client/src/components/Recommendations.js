import React, { memo,useState, useEffect } from 'react';
import axios from "axios";
const Recommendations = memo(() => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
       const getResult = async () => {
       const results = await axios.post(
        `http://localhost:5000/recommend`
      
      );
      console.log(results.data);

      setCategories([...results.data]);
    };
    getResult();
  }, []);

    return (
        <div>
        hello
            {categories.map((category) => {
                return <p>{category}</p>
            })}
        </div>
    );
});

export default Recommendations;