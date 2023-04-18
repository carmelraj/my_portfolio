import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './homepage.scss';
import Banner from '../banner/banner';
import Skill from '../skill/skill';
import MyProject from '../myProject/myProject';
import { useNavigate } from 'react-router-dom';
import Testimonial from '../testimonial/testimonial';
const Homepage = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = React.useState(false);
  useEffect(()=>{
    let name = sessionStorage.getItem('username');
    if(name === '' || name === null){
      navigate('/login')
    }    
  },[]);
  useEffect(()=>{
    let pop_status = localStorage.getItem('pop_status');
    if(!pop_status){
      setVisible(true);      
      // localStorage.setItem('pop_status',1);
    }
  },[])
  // if(!visible) return null;
  const closeModal = () =>{    
    setVisible(false);
  }
  return(
    <>
  <section className="+homepage">
    <Banner />
    <Skill />
    <MyProject />
    <Testimonial />       
  </section>
  <div className="wellcome" id="wellcome">
  <figure><img src="./images/profile.jpg" alt="myPics" className="img-responsive" /></figure> <a className="closeModal" onClick={closeModal} id="closeModal" href="Javascript:void(0)">x</a>
  <h2 className="pad0">Welcome to my portfolio</h2>
    </div>
  </>
)};

Homepage.propTypes = {};

Homepage.defaultProps = {};

export default Homepage;
