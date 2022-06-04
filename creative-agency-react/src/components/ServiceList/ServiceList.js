import React, { useEffect, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './ServiceList.css';

const ServiceList = () => {
    const [service, setService] = useState()

    useEffect(() => {
     fetch('http://localhost:5000/getOrder')
     .then(res => res.json())
     .then(data => setService(data))
    },[])
    return (
        <div className='serviceList' style={{overflow: 'hidden'}}>
           <div className="container-fluid">
           <div className="service-container bg-light p-5">
              <table>
                   <tr>
                     <th>Name</th>
                     <th>Email Id</th>
                     <th>Service</th>
                     <th>Project Details</th>
                     <th>Status</th>
                   </tr>
                     {
                      service? 
                       service.map(elem => {
                          return (
                            <Dropdown elem={elem}/> 
                          )
                       })
                       :
                       ''
                     }
                 </table>
              </div>
            </div>
        </div>
    );
};

export default ServiceList;