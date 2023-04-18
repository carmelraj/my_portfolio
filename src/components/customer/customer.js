import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './customer.scss';
import { GetCustomersList } from '../dataHandling';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import { autoTable } from 'jspdf-autotable';

const Customer = () => {
  const [modal,setModal] = useState(false)
  const [editData,updateData] =  useState([])  

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [zipcode, setZiPcode] = useState('')

  const [edit,setEdit] = useState(false)
  const [search,setSearch] = useState('')

  const { data } = GetCustomersList()
  
  const editCustomer = (res) => {
    updateData(res)    
    setModal(true)
    setEdit(true)
  }

  const addCustomer = () => {
    setModal(true)
    setEdit(false)
  }
                                              // ---------------- remove ustomer ----------------------

  const removeCustomer = (id) => {
    const conf = window.confirm('Do you want to delete it.');
    if(conf){
      axios.delete('http://localhost:8000/customer/'+id).then((res)=>{
        alert('Successfully deleted.');
      }).catch((error)=>console.log(error))
    }

  }
  const closeModal = () =>{
    setModal(false)
  }
                                                  // ---------------- update ustomer ----------------------

  const updateHandler = (e) =>{
    e.preventDefault();      
    axios.put(`http://localhost:8000/customer/`+ editData.id,editData).then((res)=>{
      console.log("Updated recordes successfully!!!")
      setModal(false)
    }      
    ).then(error => console.log('Error in editing',error))   
  }

  var  GetRoles;  
  GetRoles = sessionStorage.getItem('role');


  const isValid = () =>{
    var isProceed= true;
    if(name === '' || name === null){
      isProceed=false;
      toast.warning('Pleasse enter name');
    }
    if(email === '' || email === null){
      isProceed=false;
      toast.warning('Plesae enter email');
    }
    if(zipcode === '' || zipcode === null){
      isProceed=false;
      toast.warning('Please enter zip code');
    }
   
    return isProceed;
  } 

                                          // ---------------- add ustomer ----------------------

  const addHandler = (e) =>{    
    e.preventDefault()    
    if(isValid()){
      var obj={name,email,zipcode}
      setModal(false)      
      axios.post('http://localhost:8000/customer',obj).then((res)=>{
        alert('Successfully added.');
      }).catch((error)=>console.log(error))
    }           
  }

  const pdfGenerator = () => {
    const doc= new jsPDF();
    doc.autoTable({html : '#table'})
    doc.save('table');
  }

  return (
    <div className="customer">
      {/* <p>We can add</p> */}
      <div className='d-flex d-flex-column table'>
      <div className='d-flex d-flex-row justify-content-end'>
        <input type='text' placeholder='Search by name' className='search' value={search} onChange={e=>setSearch(e.target.value)} />
      { GetRoles === 'admin' && <button onClick={addCustomer} className='add'>Add</button>}
      { (GetRoles === 'supplier' || GetRoles === 'user') && <button className='download' onClick={pdfGenerator}>Download</button>}
      </div>
      <div className='d-flex d-flex-row'>
      <table border='1' id='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Zipcode</th>
            {
              (GetRoles !== 'supplier' && GetRoles !== 'guest') &&
              <th>Actions</th>
          }
          </tr>
        </thead>
        <tbody>
          {
            data?.data.filter((val)=>{ 
                if(search ===''){                                            
                  return val;                  
                }
                else if(val.name.toLowerCase().includes(search.toLowerCase())){    
                  
                  return val;        
                }                                                        
            }
            ).map((res) => {
              return <tr key={res.id}>
                <td>{res.id}</td>
                <td>{res.name}</td>
                <td>{res.email}</td>
                <td>{res.zipcode}</td>
                {
              (GetRoles !== 'supplier' && GetRoles !==  'guest') &&
                <td>&nbsp;&nbsp;<button className='editBtn' onClick={()=>editCustomer(res)}>Edit</button>&nbsp;&nbsp;
                { GetRoles === 'admin' &&
                  <button className='removeBtn' onClick={()=>removeCustomer(res.id)}>Delete</button>
                }&nbsp;&nbsp;              
                  </td>                  
                  
            }          
           
              </tr>
            })
          }

          { data?.data.length === 0 && <tr>
            <td colSpan='5' align='center'>
              <strong>Records not found</strong>
              </td>
          </tr> 

          }

          
        </tbody>
      </table>
      </div>
      </div>
  { modal && 
          
          <div className='modal'>
             
          {edit === true &&
          <form onSubmit={updateHandler}>
          <h2>Edit Form</h2>
          <a href='javascript:void(0)' onClick={closeModal}>x</a>          
            <input type='text' placeholder='Name' onChange={e=>updateData({...editData, name:e.target.value})} value={editData.name} />
            <input type='text' placeholder='Email' onChange={e=>updateData({...editData, email:e.target.value})} value={editData.email} />
            <input type='text' placeholder='Zipcode' onChange={e=>updateData({...editData, zipcode:e.target.value})} value={editData.zipcode} />                              
            <button>Update</button>
          </form>
           }   
           {edit === false &&
            <form onSubmit={addHandler}>
              <h2>Add Form</h2>
              {/* <a href='javascript:void(0)' onClick={closeModal}>x</a>           */}
              <input placeholder='Name' type='text' onChange={e=>setName(e.target.value)} value={name} />
              <input placeholder='Email' type='text' onChange={e=>setEmail(e.target.value)} value={email} />
              <input placeholder='Zipcode' type='text' onChange={e=>setZiPcode(e.target.value)} value={zipcode} />
              <div className='d-flex f-flex-row'>
              <button className='flex-1'>Add</button> <Link className='cancelModal flex-1' to={'javascript:void(0)'} onClick={()=>{setModal(false)}}>Cance</Link>
              </div>
            </form>
           }

          </div>
        }

    </div>
  )
};

Customer.propTypes = {};

Customer.defaultProps = {};

export default Customer;
