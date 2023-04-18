import React from 'react';
import PropTypes from 'prop-types';
import './about.scss';
import { GetAbout } from '../dataHandling';
import Testimonial from '../testimonial/testimonial';
import MyProject from '../myProject/myProject';
import Banner from '../banner/banner';
const About = () => {
  const {data} = GetAbout()
  return(
    <>
   <Banner /> 
        <div className="about d-flex section d-flex-column dark-bg">        
                <h2 className='center-align'>About Me</h2>                {
                  data?.data.map((res)=>{
                      return <p>{res.text}</p>
                  })
                }
        </div>
        <MyProject />
        <Testimonial />    
  </>
)};

About.propTypes = {};

About.defaultProps = {};

export default About;
