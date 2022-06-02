import React, { useEffect, useState } from 'react';
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
           <div className="container">
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
                             <tr>
                               <td>{elem.name}</td>
                               <td>{elem.name}</td>
                               <td>{elem.service}</td>
                               <td>{elem.discription}</td>
                               <td className='text-right select'>
                                  <select name="status" id="">
                                    <option value="Status">Status</option>
                                    <option value="Panding">Panding</option>
                                    <option value="Done">Done</option>
                                    <option value="on Going">On Going</option>
                                  </select>
                               </td>
                             </tr>
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