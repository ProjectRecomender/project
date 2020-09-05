import React, { memo,useState, useEffect } from 'react';
import api from "../utils/api"
const Recommendations = memo(() => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
       const getResult = async () => {
       const results = await api.get('/recommend');
      // console.log(results.data);

      setCategories([...results.data]);
    };
    getResult();
  }, []);

    return (
        <div>
        hello
            {categories == null ? categories.map((category) => {
                return <p>{category}</p>
            }) : <p>No data</p>}
        </div>
    );
});

export default Recommendations;