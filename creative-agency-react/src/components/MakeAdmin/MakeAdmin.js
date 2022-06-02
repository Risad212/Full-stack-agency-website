import React from 'react';
import AdminSidebar from '../adminSidebar/AdminSidebar';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import './MakeAdmin.css';

const MakeAdmin = () => {
    return (
        <section className='makeAdmin'>
             <div className="row">
                <div className="col-2" style={{padding: '0'}}>
                  <AdminSidebar />
                </div>
                <div className="col-10" style={{padding: '0'}}>
                   <AdminNavbar name="make an admin"/>
                   <div className="makeAdmin-container ps-5">
                      <form action="" className='pt-5'>
                        <input type="email" placeholder='info@email.com'/>
                        <input type="submit" value="submit" className="btn"/>
                      </form>
                   </div>
                </div>
             </div>
        </section>
    );
};

export default MakeAdmin;