import React from 'react';
import PropTypes from 'prop-types';
import './topSkills.scss';
import { GetTopSkills } from '../dataHandling';  
const TopSkills = () => {
  const {data: skill} = GetTopSkills()
  return(
  <div className="topSkills">
              <div className="my-key-skills">
                <h2>Technologies Worked On</h2>
                <div className="d-flex d-flex-row d-flex-horz-left-align">
                    <ul className="d-flex d-flex-row wrap">
                      {skill?.data.map((res)=>{
                          return <li>{res}</li>
                      })
                      }                        
                    </ul>
                </div>
            </div>
  </div>
)};

TopSkills.propTypes = {};

TopSkills.defaultProps = {};

export default TopSkills;
