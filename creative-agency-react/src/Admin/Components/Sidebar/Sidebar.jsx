import React from 'react';
import './Sidebar.css';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TimelineIcon from '@material-ui/icons/Timeline';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PeopleIcon from '@material-ui/icons/People';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
           <div className="sidebarWrapper">
              <div className="sidebarMenu">
                 <h3 className="sidebarTitle">Dashboard</h3>
                 <ul className="sidebarList">
                    <Link to="/admin" className='link'><li className="sidebarListItem"><LineStyleIcon className='sidebarIcon'/>Home</li></Link>
                 </ul>
              </div>
              {/*-- menu --*/}
              <div className="sidebarMenu">
                 <h3 className="sidebarTitle">Quick Menu</h3>
                 <ul className="sidebarList">
                    <Link to="admin/user" className='link'><li className="sidebarListItem"><PeopleIcon className='sidebarIcon'/>Users</li></Link>
                    <Link to="admin/newuser" className='link'><li className="sidebarListItem"><PersonAddIcon className='sidebarIcon'/>Add User</li></Link>
                    <Link to="admin/product" className='link'><li className="sidebarListItem"><InventoryIcon className='sidebarIcon'/>Products</li></Link>
                    <Link to="admin/newproduct" className='link'><li className="sidebarListItem"><AddBoxIcon className='sidebarIcon'/>Add Product</li></Link>
                 </ul>
              </div>
              {/*-- menu --*/}
              <div className="sidebarMenu">
                 <h3 className="sidebarTitle">Notification</h3>
                 <ul className="sidebarList">
                    <li className="sidebarListItem"><LineStyleIcon className='sidebarIcon'/>Mail</li>
                    <li className="sidebarListItem"><TimelineIcon className='sidebarIcon'/>Feedback</li>
                    <li className="sidebarListItem"><TrendingUpIcon className='sidebarIcon'/>Messages</li>
                 </ul>
              </div>
              {/*-- menu --*/}
              <div className="sidebarMenu">
                 <h3 className="sidebarTitle">Staff</h3>
                 <ul className="sidebarList">
                    <li className="sidebarListItem"><LineStyleIcon className='sidebarIcon'/>Manege</li>
                    <li className="sidebarListItem"><TimelineIcon className='sidebarIcon'/>Analytics</li>
                    <li className="sidebarListItem"><TrendingUpIcon className='sidebarIcon'/>Reports</li>
                 </ul>
              </div>
            </div> 
        </div>
    );
};

export default Sidebar;