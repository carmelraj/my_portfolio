import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './myprojectdetails.scss';
import { projectSlier, GetProjectDetails, GetTopSkills } from '../dataHandling';
import Banner from '../banner/banner';
import Resume from '../resume/resume';
import ProjectList from '../projectList/projectList';
import TopSkills from '../topSkills/topSkills';
const Myprojectdetails = () => {

const [myProj,updateMyProj] = useState(false)  
const [img,updateImg] = useState('./images/slider1.jpg')
const [isactive,updateActive] = useState(false)

useEffect(()=>{
  updateActive(0)
},[])

const {data: myproj} = GetProjectDetails()
const {data: skill} = GetTopSkills()
return(
  <>
  <Banner />
  <div className="myprojectdetails d-flex d-flex-column project dark-bg section center-align">
        <h2 className="center-align">My Projects</h2>
        <div className='project-list d-flex d-flex-row'>       
            <div className='d-flex-horz-left-align d-flex d-flex-column flex-1'>
              <Resume />
            </div>  
            <div className='d-flex d-flex-column flex-1'>
              <ProjectList />
              <TopSkills />
            </div>
        </div>
  </div>
  </>
)};

Myprojectdetails.propTypes = {};

Myprojectdetails.defaultProps = {};

export default Myprojectdetails;
