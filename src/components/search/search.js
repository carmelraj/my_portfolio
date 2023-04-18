import React,{useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './search.scss';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { SearchContext } from '../navigation/navigation';

const Search = () => {
const [search,setSearch] = useState([])
const searchResults = useLocation()
let ListIemplate;
let result ='Search ';
if(searchResults.state.data[0].name){
   
  ListIemplate = searchResults.state.data.map((res)=>{
    return <p key={res.name}>{res.name}</p>
  })
  result+='results found';
}
else{
  ListIemplate = searchResults.state.data
  result+='results not found';
}

  return(
 
  <div className="search dark-bg">          
    <div className='d-flex d-flex-column'>
      <h1>{result}</h1>
      <div className='list'>
      {ListIemplate}
      </div>
    </div>      
  </div>
)
};

Search.propTypes = {};

Search.defaultProps = {};

export default Search;
