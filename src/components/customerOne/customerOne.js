import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './customerOne.scss';
import { GetCustomersList } from '../dataHandling';
import { useQuery } from 'react-query';
const CustomerOne = () => {
  // const [printData,setData] = useEffect([]) 
  // useEffect(()=>{
    // const {data} = GetCustomersList()
  //   return data
  // defaultQueryFn()
  // },[])
  // const defaultQueryFn = async () => {
  //   const { data } = GetCustomersList()
  //   return data;
  // };
  const query = useQuery('customer-list', GetCustomersList(), {
    enabled: false,
    staleTime: Infinity
  });
  console.log(query.data)

  return(
  <div className="customerOne">
   <table border='1'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Zipcode</th>
           
              <th>Actions</th>
        
          </tr>
        </thead>
        <tbody>
        {/* {query?.data?.map((res)=>{
          return <p>{res.name}</p>
        })} */}
           {/* {
            query?.data.map((res) => {
              return <tr key={res.id}>
                <td>{res.id}</td>
                <td>{res.name}</td>
                <td>{res.email}</td>
                <td>{res.zipcode}</td>
               
                <td><button className='editBtn'>Edit</button>
               
                  <button className='removeBtn' >Delete</button>
              
                  </td>
           
              </tr>
            })
          }  */}
        </tbody>
      </table>
  </div>
)};

CustomerOne.propTypes = {};

CustomerOne.defaultProps = {};

export default CustomerOne;
