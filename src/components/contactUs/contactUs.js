import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './contactUs.scss';
import { toast } from 'react-toastify';
import { SendContact } from '../dataHandling';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const ContactUs = () => {
  const navigate = useNavigate()
  const [firtsName,updateFname] = useState('')
  const [lastName,updateLname] = useState('')
  const [email,updateEmail] = useState('')
  const [phone,updatePhone] = useState('')
  const [comments,updateComments] = useState('')
  const contactHandler = (e) => {
    e.preventDefault();
    if (isValidate()) {
        var obj = {firtsName,lastName,email,phone,comments}
        sessionStorage.setItem('firstName',obj.firtsName)
        sessionStorage.setItem('lastName',obj.lastName)
        navigate('/thankyou')      
        return axios.post('http://localhost:8000/contact',obj)           
    } 
  }

  const isValidate = () => {
    let isProceed = true;
    if(firtsName === '' || firtsName === null){
      isProceed=false; 
      toast.warning('Pleade enter first name');
    }
    if(lastName === '' || lastName === null){
      isProceed=false; 
      toast.warning('Pleade enter last name');
    }
    if(email === '' || email === null){
      isProceed=false; 
      toast.warning('Pleade enter email');
    }
    if(phone === '' || phone === null){
      isProceed=false; 
      toast.warning('Pleade enter phone');
    }
    if(comments === '' || comments === null){
      isProceed=false; 
      toast.warning('Pleade enter comments');
    }
    if(!isProceed){
      toast.warning('Enter the fields');
   }
    else{ 
      if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/.test(email)){

      }
      else{
         isProceed=false;
         toast.warning('Please enter valid email address');
      }
      if(/^[0-9]{10}$/.test(phone)){
                                   
                
      }
      else{
            isProceed=false;
            toast.warning('Please enter valid mobile no');
      }
    }
    return isProceed;
  }
  return(
  <div className="contactUs d-flex d-flex-column section contact dark-bg">
    <h2 className="center-align">Contact Us</h2>
    <form autocomplete="off" onSubmit={contactHandler} noValidate>      
              <div className='d-flex d-flex-row mar-bottom-30'>
                    <div className='d-flex flex-1 pad-right-30'>
                        <input placeholder='First name' type='text' value={firtsName} onChange={e=>updateFname(e.target.value)} autocomplete="off" />
                    </div>
                    <div className='d-flex flex-1'>
                        <input placeholder='Last name' type='text' value={lastName} onChange={e=>updateLname(e.target.value)} autocomplete="off" />
                    </div>
              </div>
              <div className='d-flex d-flex-row mar-bottom-30'>
                    <div className='d-flex flex-1 pad-right-30'>
                        <input placeholder='Email' type='text' value={email} onChange={e=>updateEmail(e.target.value)} autocomplete="off" />
                    </div>
                    <div className='d-flex flex-1'>
                        <input placeholder='Phone' type='text' value={phone} onChange={e=>updatePhone(e.target.value)} autocomplete="off" />
                    </div>
              </div>
              <div className='d-flex d-flex-row mar-bottom-30'>
                  <textarea value={comments} onChange={e=>updateComments(e.target.value)} autocomplete="off"></textarea>
              </div>
       <button>Submit</button>
    </form>
  </div>
)};

ContactUs.propTypes = {};

ContactUs.defaultProps = {};

export default ContactUs;
