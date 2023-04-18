import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './resume.scss';
import { GetProjectDetails } from '../dataHandling';
const Resume = () => {  
  const [myProj,updateMyProj] = useState(false) 

  const {data: myproj} = GetProjectDetails()

  return(   
  <div className="resume">
        <div className="project-desc">                      
           {
            myproj?.data.map((res)=>{
              return    <>
                          <h3>{res.companyName}</h3>
                          <h4>{res.designation}</h4>
                          <p>{res.info}</p>
                          <small>{res.keySkills}</small>
                          <h6>Responsibilities:</h6>
                          <ul>
                          {res.desc?.map((res1)=> (<li>{res1}</li>))                          
                            }
                          </ul>
                        </>
            })
           }                   

        </div>
  </div>
)};

Resume.propTypes = {};

Resume.defaultProps = {};

export default Resume;
