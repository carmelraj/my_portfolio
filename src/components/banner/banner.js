import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './banner.scss';
import { Link } from 'react-router-dom';

const Banner = () => {
  const username = sessionStorage.getItem('username')

  return(
  <section className="banner d-flex d-flex-row mar-top-30">
        <div className="info">
            <h5>Hello, <span>I'm</span></h5>
            <h1>{username}</h1>
            <h3>UI Developer</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure vero consequatur, sapiente doloribus placeat inventore eum ipsa dolore. Atque minus architecto nesciunt facilis iusto rerum quaerat, vel obcaecati ipsum a!</p>            
            <Link to={'/contact-us'} className="redirectLink">Let's Talk</Link>
              <div className="social">
                  <span>Check Out My</span>
                  <ul className="d-flex">
                      <li><Link to={'https://www.facebook.com/'} target="_blank"><img src="images/facebook.png" /></Link></li>
                      <li><Link to={'https://twitter.com/?lang=en-in'} target="_blank"><img src="images/twitter.png" /></Link></li>            
                  </ul>
              </div>
          </div>
          <div className="home-image">        
    </div>
  </section>
)};

Banner.propTypes = {};

Banner.defaultProps = {};

export default Banner;
