import React from 'react';
import AdminNavbar from '../../../components/AdminNavbar/AdminNavbar';
import AdminSidebar from '../../../components/adminSidebar/AdminSidebar';
import ServiceList from '../../../components/ServiceList/ServiceList';

const AdminDashbaord = () => {
    return (
        <div>
           <div className="row">
              <div className="col-2" style={{padding: '0'}}>
                <AdminSidebar />
              </div>
               <div className="col-10" style={{padding: '0'}}> 
                 <AdminNavbar name="all service"/>
                 <ServiceList />
               </div>
            </div> 
        </div>
    );
};

export default AdminDashbaord;

