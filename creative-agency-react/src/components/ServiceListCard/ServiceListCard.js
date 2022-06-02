import React, { useEffect, useState } from 'react';
import './ServiceListCard.css';
import serviceCardIcon1 from '../../images/icons/service1.png';
import serviceCardIcon2 from '../../images/icons/service2.png';
import SideBar from '../Sidebar/SideBar';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';


const ServiceListCard = () => {
    const [order,setOrder] = useState()
    const serviceListCardData = [
       {
         icon: serviceCardIcon1,
         status: 'panding',
         title: 'Web & Mobile design',
         disc: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
         statusBgColor: '#FFE3E3',
         statusColor: '#FF4545',
       },
       {
        icon: serviceCardIcon2,
        status: 'Done',
        title: 'Graphic design',
        disc: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
        statusBgColor: '#C6FFE0',
        statusColor: '#009444',
      }
    ]

    useEffect(() => {
      fetch('http://localhost:5000/getOrder')
      .then(res => res.json())
      .then(data => setOrder(data))
    },[order])


    return (
         <div style={{overflow: 'hidden'}}>
        <div className="row">
         <div className="col-2" style={{padding: '0'}}>
           <SideBar />
         </div>
         <div className="col-10" style={{padding: '0'}}>
          <DashboardNavbar name="servicelist"/>
        <section className='serviceListCard-container pt-3 bg-light' style={{height: "80vh"}}>
          <div className="container">
            <div className="row">
              {
                order?
                  order.map(elem => {
                    return (
                      <div className="col-4">
                        <div className="card main-font">
                          <div className='d-flex justify-content-between align-items-center'>
                            <img src={`http://localhost:5000/${elem?.fileName}`} alt="" style={{width: '18%'}}/>
                            </div>
                            <h4>{elem?.service}</h4>
                            <span>{elem.discription}</span>
                            <span>{elem?.price + '$'}</span>
                      </div>
                    </div>
                    )
                  })
                 :
                 'loading....'
                }
              </div>
           </div>
        </section>
        </div>
   </div>
   </div>
  );
};

export default ServiceListCard;

