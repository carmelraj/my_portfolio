import React from 'react';
import PropTypes from 'prop-types';
import './skill.scss';
import {  CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { GetSkills } from '../dataHandling';
const Skill = () => {
  const onSuccess = (data) =>{
    console('Success',data);
  }

  const onError = (error) =>{
      console.log(error);
  }  
  const {data, isLoading, isFetching} = GetSkills(onError, onSuccess)

  if(isLoading || isFetching){
    return <p className='spinner'>Loading...</p>
  }

  return(
  <section className="skill dark-bg d-flex d-flex-column section relative">    
      <h2 className="center-align">Skills</h2>    
      <div className='skill-list d-flex d-flex-row justify-content-space-between'>
           {
              data?.data.map((res)=>{
                  return  <div className='skill-progress-list' key={res.id}>
                          <div className='progress' label="Default">
                              <CircularProgressbar value={res.percentage} text={`${res.percentage}%`} 
                              styles={buildStyles({
                                textColor: "#01B891",
                                pathColor: "#01B891",
                                trailColor: "#525151",
                                pathTransitionDuration: 0.15
                              })}
                               />
                              <h3>{res.name}</h3>
                          </div>
                        </div>
              })
            }           
      </div>
  </section>
)};

Skill.propTypes = {};

Skill.defaultProps = {};

export default Skill;
