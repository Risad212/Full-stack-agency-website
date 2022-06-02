import React, { useContext} from 'react';
import { DataStorge } from '../../Storge/Storge';
import jwt_decode from "jwt-decode";

const DashboardNavbar = (props) => {
   const [userInfo, setUserInfo] = useContext(DataStorge)
   const token = sessionStorage.getItem('token')
   const decoded = jwt_decode(token);
   const username = decoded.name
    return (
        <section>
           <div className="py-3">
             <div className="container d-flex justify-content-between">
                <h4>{props?.name}</h4>
                <h5>{username}</h5>
              </div>
           </div>
        </section>
    );
};

export default DashboardNavbar;