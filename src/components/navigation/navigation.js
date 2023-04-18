import React, { useEffect, useState,createContext  } from 'react';
import PropTypes from 'prop-types';
import './navigation.scss';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import Search from '../search/search';
export const SearchContext = createContext()
const Navigation = () => {
  
  const navigate = useLocation()
  const searchNav = useNavigate()
  const username = sessionStorage.getItem('username')
  const [showNavigation,setNavigation] =  useState(false)
  const[searchText, setSearch] = useState('')
  

const [sname,setName] = useState('sam')
    useEffect(()=>{      
      if(navigate.pathname === '/login' || navigate.pathname === '/register'){
        setNavigation(false)
      }
      else{
        setNavigation(true)
      }
    },[navigate])

    const searchHandler = (e) => {
      e.preventDefault();      
      var issearch = true;
      if(searchText === '' || searchText === null){
        toast.warning('Please enter text to search')
        issearch = false;
      }


      return axios.get('http://localhost:8000/'+ searchText)
      .then((res)=>{
      console.log('res>>',res.data)
      // const data=res.data;
      const id=5;
      // searchNav('/search',{search: {data:data}})       
      searchNav('/search',{state: {data:res.data}})  
      // return issearch;
      // return <SearchContext.Provider value={sname}><Search /></SearchContext.Provider>
    }
      )
      .catch((err)=>{
        console.log('Error in getting data',err)
        searchNav('/search',{state: {data:searchText}})
      })           
    }

    var  GetRoles;  
  GetRoles = sessionStorage.getItem('role');

    
  return(
  <div className="navigation">    
  {showNavigation &&
    <header>
    <nav className="d-flex d-flex-row justify-content-space-between d-flex-horz-center-align">        
        <Link className='logo' to={'/'}>Carmelraj</Link>
        <ul className="d-flex mar0">
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/about'}>About Me</NavLink></li>
            <li><NavLink to={'/my-project'}>My Projects</NavLink></li>
            <li><NavLink to={'/contact-us'}>Contact Us</NavLink></li>
            <li><NavLink to={'/customer'}>Customer</NavLink></li>
            {GetRoles === 'admin' && <li><NavLink to={'/admin-home'}>Admin Dashboard</NavLink></li>}
            {/* <li><NavLink to={'/customerone'}>Customer one</NavLink></li> */}
        </ul>                
        <div className="search d-flex d-flex-row">            
            <input type="text" className="full-width" value={searchText} onChange={e=>setSearch(e.target.value)} id="searchTxt" placeholder="Search..." /><button onClick={searchHandler} id="searchBtn">Search</button>
        </div>
        <div className="user-info d-flex d-flex-row">            
          <div>
              <figure><img src='images/profile.jpg' alt='profile' /></figure>
          </div>
          <div className='d-flex d-flex-column'>
              <h4>{username}</h4>
              <Link to={'/login'}>Logout</Link>
          </div>
        </div>
    </nav>
</header>
}

  </div>
)};

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;

