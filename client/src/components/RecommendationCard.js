import React ,{ useState, useEffect }from 'react';
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import axios from 'axios';

const RecommendationCard = ({field}) => {
    const [repos, setrepos] = useState([])
    useEffect(() => {
       const getResult = async () => {
       const results = await axios.get(`https://api.github.com/search/repositories?q=topic:${field}`);
      console.log(results.data);
      setrepos([...results.data.items])
    };
    getResult();
  },[field],);

  var repositories = repos.slice(0,3).map((repo) => {
             return <div><p><a href={repo.html_url} target="_blank" rel="noopener noreferrer"> {repo.name}</a></p></div> 
         })
    return (
         <Card>
         <CardTitle>
            {field}
         </CardTitle>
       
         <CardText>
         To start you off here are some sample repositories
         </CardText>
          <CardBody>
 {repositories} 
         </CardBody>
         </Card> 
    );
};

export default RecommendationCard;