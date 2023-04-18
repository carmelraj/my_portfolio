import React from 'react';
import PropTypes from 'prop-types';
import './footer.scss';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect} from 'react';
const Footer = () => {
  const navigate = useLocation()
  const [showNavigation,setNavigation] =  useState(false)

  const scrollTOp = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'}); 
  }

  useEffect(()=>{    
    if(navigate.pathname === '/login' || navigate.pathname === '/register'){
      setNavigation(false)
    }
    else{
      setNavigation(true)
    }
  },[navigate])

  return(
    <>{ showNavigation &&
  <section className="footer d-flex d-flex-row section relative">
      <div className='footerLinks'>
          <h2>Carmelraj</h2>
      </div>
      <div className='footerLinks'>
          <address>No.90, Sarathambal Nagar<br />Karumathmpatti, Somanur, Coimbatore</address>
      </div>
      <div className='footerLinks'>
        <div className='d-flex d-flex-column'>
          <Link to={'/about'}>About Me</Link>
          <Link to={'/about'}>My Projects</Link>
          <Link to={'/contact-us'}>Contatc Us</Link>
          </div>
      </div>
      <div className='footerLinks'>
      <div className='d-flex d-flex-column'>
          <Link to={'https://www.facebook.com/'} target='_blank'>Facebook</Link>
          <Link to={'https://twitter.com/?lang=en-in'} target='_blank'>Twitter</Link>
          </div>
      </div>
      <Link className='scrollTop' onClick={scrollTOp} to={'javascript:void(0)'}><img src='./images/top-arrow.png' /></Link>
  </section>
  }
  </>  
)};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
