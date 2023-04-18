import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './adminhome.scss';
import { toast } from 'react-toastify';
import axios from 'axios';
const Adminhome = () => {
  const [about,setAbout] = useState('')

  const changeAboutPageHandler = (e)=>{
    e.preventDefault();
    setAbout(about)
    if(about === '' || about === null){
      toast.warning("please tell about yourself");
    }
    else{
    var aboutus= {text:about}
    setAbout(about)
    console.log(about)
    const id=1;
    axios.put(`http://localhost:8000/aboutus/`+ id,aboutus).then((res)=>{
      console.log("Updated recordes successfully!!!")
    }      
    ).then(error => console.log('Error in editing',error))  
    }
      
  }
  return(
  <div className="adminhome">
    <div className='d-flex -flex-row section dark-bg'>
        <div className='d-flex d-flex-column'>


          <h2>Welcome Admin</h2>

          <form onSubmit={changeAboutPageHandler}>
            <label>Edit About me</label>
            <textarea value={about} onChange={e=>setAbout(e.target.value)}></textarea>
            <button>Submit</button>
          </form>
        </div>
    </div>
  </div>
)};

Adminhome.propTypes = {};

Adminhome.defaultProps = {};

export default Adminhome;
