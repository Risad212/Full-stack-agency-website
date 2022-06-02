import React from 'react';
import DashboardNavbar from '../../components/DashboardNavbar/DashboardNavbar';
import Sidebar from '../../components/Sidebar/SideBar';
import Order from  '../../components/Order/Order'

const Dashbaord = () => {
    return (
        <div style={{overflow: 'hidden'}}>
           <div className="row">
              <div className="col-2" style={{padding: '0'}}>
                 <Sidebar />
              </div>
              <div className="col-10" style={{padding: '0'}}>
                 <DashboardNavbar name='Order' />
                 <Order />
              </div>
           </div>
        </div>
    );
};

export default Dashbaord;