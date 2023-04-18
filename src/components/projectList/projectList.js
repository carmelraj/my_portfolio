import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './projectList.scss';
import { projectSlier, GetTopSkills } from '../dataHandling';
const ProjectList = () => {    
  const [myProj,updateMyProj] = useState(false)  
  const [img,updateImg] = useState('./images/slider1.jpg')
  const [isactive,updateActive] = useState(false)
  const {data: skill} = GetTopSkills()
  useEffect(()=>{
    updateActive(0)
  },[])
  return(
  <div className="projectList">
    <div className='project-image'>
              <div className="image-block d-flex d-flex-column">
                      <figure>
                          <img src={img} className={`${myProj ? 'fadein' : ''}`} id="image-prev" alt="project" />
                      </figure>
                      <ul className="d-flex d-flex-row" id="project-slide">
                        {
                          projectSlier.map((res,i)=>{
                            return <li onClick={(e)=>{                                                                                             
                              updateActive(res.id)
                              updateImg(res.src)
                              updateMyProj(true)
                              setTimeout(function () {
                                updateMyProj(false)
                              }, 1000);              
                            }} className={`navlist ${isactive === res.id ? 'active':''}`}  key={i}>
                                      <img src={res.src} alt='Project' />
                                      <div className="overlay"></div>
                                  </li>
                          })
                        }
                      </ul>
                  </div>
            </div> 
  </div>
)};

ProjectList.propTypes = {};

ProjectList.defaultProps = {};

export default ProjectList;
