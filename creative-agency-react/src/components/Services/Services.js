import React, { useEffect, useState } from 'react';
import './Service.css';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const [service, setService] = useState()
    // navigate to order dashbaord
    const navigate = useNavigate()

    useEffect(() => {
     fetch('http://localhost:5000/getService')
     .then(res => res.json())
     .then(data => setService(data))
    },[])
    
    return (
        <section className='service-container'>
            <div className="container">
              <h2 className='fw-bolder d-flex justify-content-center pb-3'>Provide awesome<p className='ps-2 green-color'>services</p></h2>
               <div className="row">
                 {
                  service?
                    service.map(elem => {
                      console.log(elem)
                      return (
                          <div className="col-lg-4 col-md-6 col-sm-12">
                             <div className="service-card" onClick={() => navigate('/dashboard')}>
                                <img src={`http://localhost:5000/${elem?.fileName}`} alt=""/>
                                <h3>{elem?.title}</h3>
                                <p>{elem?.discription}</p>
                            </div>
                         </div>
                      )
                  })
                  :
                  ''
                 }
               </div>
            </div>
        </section>
    );
};

export default Services;