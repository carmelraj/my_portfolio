import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import bcrypt from 'bcryptjs'
import axios from 'axios';

const Login = () => {
  const [username, setUserName] = useState('')
  const [passwordency, setPassword] = useState('')
  const navigate = useNavigate()
  const isValidate = () =>{
         let isProceed = true;   
         
         let errMsg='Please enter ';
         if(username ===null || username === ''){
          isProceed=false;
          errMsg+='username';
         }
         if(passwordency ===null || passwordency === ''){
          isProceed=false;
          errMsg+='password';
         }

         if(!isProceed){
          toast.warning(errMsg);
          }
         return isProceed;
     }
   
     useEffect(()=>{
      sessionStorage.clear();
   },[]);

  const loginHandler = (e) => {
    e.preventDefault();
    const password = bcrypt.hashSync(passwordency)
    
    if(isValidate()){            
       axios.get('http://localhost:8000/users?username='+username).then((res)=>{                                
              if(username === res.data[0].username){
                console.log('success login')                
                sessionStorage.setItem('username',username);  
                sessionStorage.setItem('role',res.data[0].role);  
                navigate('/')
              }              
              else{
                toast.warning('Invalid username or password');
                console.log('Login Error');
              }
       })
    }  
  }

  const guestHandler = () =>{
    sessionStorage.setItem('username','guest');
    sessionStorage.setItem('role','guest');
    navigate('/');
  }

  return(
  <div className="login">
    <div className='login-form'>
         
              <div className='d-flex d-flex-column justify-content-space-between'>
                  <div className='d-flex d-flex-row d-flex-grow-1 justify-content-center'>                    
                      <h2>Carmelraj</h2>   
                  </div>
                  </div>
                  <form autocomplete="off" onSubmit={loginHandler} noValidate>
                        <div className='d-flex d-flex-row d-flex-grow-1 pad-bottom-30'>                    
                              <input type='text' onChange={e=>setUserName(e.target.value)} value={username} placeholder='Username' autocomplete="off" />                      
                        </div>
                        <div className='d-flex d-flex-row d-flex-grow-1 pad-bottom-30'>              
                              <input type='password' onChange={e=>setPassword(e.target.value)} value={passwordency} placeholder='Password' autocomplete="off" />              
                        </div>
                                    
                        <div className='d-flex d-flex-row pad-bottom-20'>
                            <div className='flex-1'>
                              <button>Login</button>
                            </div>
                            <div className='flex-1 d-flex d-flex-horz-center-align justify-content-center'>
                              <Link to={'/register'}>New User Register</Link>
                            </div>
                        </div>
                       
                  </form>
                  <div className='d-flex d-flex-row'>
                          <button onClick={guestHandler}>Login as a Guest ?</button>
                  </div>
    </div>
  </div>
)};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
