import React from 'react';
import PropTypes from 'prop-types';
import './testimonial.scss';
import { GetTestimonial } from '../dataHandling';
import StarRatings from 'react-star-ratings';
const Testimonial = () => {
  
  const {data} = GetTestimonial()

  return(
  <div className="testimonial section dark-bg dark-bg d-flex d-flex-column d-flex-horz-center-align">
    <h2>Testimonial</h2>
   
    <div className='grid-layout-container'>

    {
      data?.data.map((res)=>{
          return <div className="testimonial-list" key={res.name}>           
           <div className='star'>
                           <StarRatings
                              rating={4.403}
                              starDimension="40px"
                              starSpacing="15px"
                              starRatedColor="#01b891"
                              starEmptyColor="#1e9178"
                              starSpacing="5px"
                              starDimension="20px"
                            />
                      </div>
                  <p>{res.text}</p>
                  <div className="profile">                     
                      <figure><img src="./images/profile.jpg" className="img-responsive" alt="Profile Pics" /></figure>
                         <div className="user-info pad-left-20">
                            <h5>{res.name}</h5>
                            <p className="pad0">{res.designation}</p>
                        </div>
                      </div>
                  </div>
      })
    }




    </div>

  </div>
)};

Testimonial.propTypes = {};

Testimonial.defaultProps = {};

export default Testimonial;
