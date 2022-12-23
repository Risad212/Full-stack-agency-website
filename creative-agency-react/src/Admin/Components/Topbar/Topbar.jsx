import React from 'react';
import './Topbar.css';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsIcon from '@material-ui/icons/Settings';
import LanguageIcon from '@material-ui/icons/Language';
import Logo from '../../Media/avatar.jpg';
import { Link } from "react-router-dom";

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="topbarwrapper">
                <div className="topLeft">
                   <span className="logo"><Link to="/">Risad</Link></span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                       <NotificationsNoneIcon />
                       <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                       <LanguageIcon />
                       <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                       <SettingsIcon />
                    </div>
                    <img src={Logo} alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    );
};

export default Topbar;