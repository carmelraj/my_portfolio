import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './register.scss';
import { Link, useNavigate } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { toast } from 'react-toastify';

import axios from 'axios';
import bcrypt from 'bcryptjs'
const Register = () => {
  const navigate = useNavigate();    
  const [dob, setDob] = useState(new Date)
  const [value, onChange] = useState(new Date());
  
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [username,setUsername] = useState('')

  const [gender,setGender] = useState('')

  const [passwordency,setPassword] = useState('')
  const [repassword,setRepassword] = useState('')
  const [country,setCountry] = useState('')
  const [state,setState] = useState('')
  const [zipCode,setZipCode] = useState('')
  const [mobile,setMobile] = useState('')
  const [address,setAddress] = useState('')

  const [agree,setAgree] = useState(false)
  
  const selectDateHandler = (d) =>{
      setDob(d)
      const nowDate = d
      const UsFormatter = new Intl.DateTimeFormat('en-US')
      // console.log(UsFormatter.format(nowDate))
      // console.log(UsFormatter)
  }

  const isValidate = () => {
      let isProceed = true;
      let errorMsg = 'Please enter';
      if(firstName === '' || firstName === null){
            isProceed = false;
            errorMsg +='firts name';
      }

      if(lastName === '' || lastName === null){
            isProceed = false;
            errorMsg +=' last name';
      }

      if(dob === '' || dob === null){
            isProceed = false;
            errorMsg +=' Date of birth';
      }

      if(email === '' || email === null){
            isProceed = false;
            errorMsg +=' Email';
      }

      if(username === '' || username === null){
            isProceed = false;
            errorMsg +=' Username';
      }

      if(passwordency === '' || passwordency === null){
            isProceed = false;
            errorMsg +=' Password';
      }

      if(repassword === '' || repassword === null){
            isProceed = false;
            errorMsg +=' Re-type password';
      }

      
      if(country === '' || country === null){
            isProceed = false;
            errorMsg +=' country';
      }

      if(state === '' || state === null){
            isProceed = false;
            errorMsg +=' state';
      }

      if(zipCode === '' || zipCode === null){
            isProceed = false;
            errorMsg +=' zip code';
      }

      if(mobile === '' || mobile === null){
            isProceed = false;
            errorMsg +=' mobile';
      }

      if(address === '' || address === null){
            isProceed = false;
            errorMsg +=' address';
      }

      if(agree === false){
            isProceed = false;
            errorMsg +=' terms and consitions';
      }
      

      if(!isProceed){
            toast.warning(errorMsg);
         }
         else if(passwordency !== repassword){
            toast.warning('password does not match');
         }
         else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/.test(email)){

            }
            else{
               isProceed=false;
               toast.warning('Please enter valid email address');
            }

            if(/^[0-9]{10}$/.test(mobile)){
                                   
                
            }
            else{
                  isProceed=false;
                  toast.warning('Please enter valid mobile no');
            }
         }
         
      return isProceed;
  }

  const userHandler = (e) =>{
    e.preventDefault();
    let createdAt = new Date()

    const password = bcrypt.hashSync(passwordency)
    
    if(isValidate() && agree){
      var obj = {firstName,lastName,dob,username,gender,password,country,state,zipCode,mobile,email,address,createdAt}
      // console.log(obj);
      navigate('/login')
      // return request({URL:'/users', data:obj})
     return axios.post('http://localhost:8000/users',obj)    
    }
  }
  return(
<div className="register">
  <div className='d-flex d-flex-column justify-content-space-between user-register'>                    
           <form autocomplete="off" onSubmit={userHandler} noValidate>
                <div className='d-flex d-flex-row d-flex-grow-1 mar-bottom-30'>
                          <div className='flex-1 pad-right-30'>
                                <input type='text' value={firstName} onChange={e=>setFirstName(e.target.value)} placeholder='First name' autocomplete="off" />                                  
                          </div>
                          <div className='flex-1'>
                                <input type='text' value={lastName} onChange={e=>setLastName(e.target.value)} placeholder='Last name' autocomplete="off" />                                  
                        </div>
                </div>

                <div className='d-flex d-flex-row d-flex-grow-1 mar-bottom-30'>
                          <div className='flex-1 pad-right-30'>
                          <DatePicker  dateFormat="MM/dd/yyyy"
              selected={dob} onChange={selectDateHandler} value={value} />
                          </div>
                          <div className='flex-1'>
                                <input type='Email' value={email}  onChange={e=>setEmail(e.target.value)} placeholder='Email' autocomplete="off" />  
                        </div>
                </div>
                
                <div className='d-flex d-flex-row d-flex-grow-1 mar-bottom-30'>
                          <div className='flex-1 pad-right-30'>
                                <input type='text' value={username} onChange={e=>setUsername(e.target.value)} placeholder='Username' />  
                          </div>
                          <div className='flex-1 custom-radio'>
                             <input type="radio" id="male" onChange={e=>setGender(e.target.value)} value='male' name='gender' />
                              <label for="male">&nbsp;Male</label>&nbsp;&nbsp;&nbsp;&nbsp;
                              <input type="radio" id="female" onChange={e=>setGender(e.target.value)} value="female" name='gender' />
                              <label for="female">&nbsp;Female</label>
                          </div>
                </div>
                        
                <div className='d-flex d-flex-row d-flex-grow-1 mar-bottom-30'>
                          <div className='flex-1 pad-right-30'>
                                <input type='password' value={passwordency} onChange={e=>setPassword(e.target.value)} placeholder='Password' />  
                          </div>
                          <div className='flex-1'>
                                <input type='password' value={repassword} onChange={e=>setRepassword(e.target.value)} placeholder='Re-type password' />  
                          </div>
                </div>

                <div className='d-flex d-flex-row d-flex-grow-1 mar-bottom-30'>
                          <div className='flex-1 pad-right-30'>                        
                                <select className='custom-select-dropdown' value={country} onChange={e=>setCountry(e.target.value)}>
                                    <option value=''>Select Country</option>
                                    <option value='India'>India</option>
                                    <option value='USA'>USA</option>
                                    <option value='spain'>Spain</option>
                              </select>
                          </div>
                          <div className='flex-1'>
                          <select className='custom-select-dropdown' value={state} onChange={e=>setState(e.target.value)}>
                                    <option value=''>Select State</option>
                                    <option value='tamil nadu'>Tamil nadu</option>
                                    <option value='karnataka'>Karnataka</option>
                                    <option value='kerala'>Kerala</option>
                              </select>
                          </div>
                </div>
                          
                <div className='d-flex d-flex-row d-flex-grow-1 mar-bottom-30'>
                          <div className='flex-1 pad-right-30'>
                                <input type='text' placeholder='Zip code' value={zipCode} onChange={e=>setZipCode(e.target.value)} autocomplete="off" />  
                          </div>
                          <div className='flex-1'>
                                <input type='text' placeholder='Mobile' value={mobile} onChange={e=>setMobile(e.target.value)} autocomplete="off" />  
                        </div>
                </div>

                <div className='d-flex d-flex-row d-flex-grow-1 mar-bottom-30'>
                          <div className='flex-1'>
                                <textarea type='text' placeholder='Address' value={address} onChange={e=>setAddress(e.target.value)} autocomplete="off"></textarea>                                
                          </div>                    
                </div>

                <div className='d-flex d-flex-row d-flex-grow-1 mar-bottom-20'>
                          <div className='flex-1 custom-checkbox'>                          
                                <input type="checkbox" id="accept" value={true} onClick={e=>setAgree(e.target.value)} />
                              <label for="accept">&nbsp;Accept terms and condition</label>
                          </div>                    
                </div>
                  
                <div className='d-flex d-flex-row d-flex-grow-1'>
                          <div className='flex-1 pad-right-30'>
                                <button>Register</button>
                          </div>
                          <div className='flex-1 d-flex justify-content-center align-items-center'>
                                <Link to={'/login'}>Login</Link>
                        </div>
                </div>
          </form>    
    </div>
  </div>
)};

Register.propTypes = {};

Register.defaultProps = {};

export default Register;
