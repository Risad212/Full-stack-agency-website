import React from 'react';
import './widgetsm.css';
import VisibilityIcon from '@material-ui/icons/Visibility';

const WidgetSm = () => {
    return (
        <div className='widgetsm'>
            <span className="WidgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmItem">
                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Elon Mask</span>
                        <span className="widgetSmUserTitle">Softoware Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                {/*--- item --*/}
                <li className="widgetSmItem">
                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Elon Mask</span>
                        <span className="widgetSmUserTitle">Softoware Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                {/*--- item --*/}
                <li className="widgetSmItem">
                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Elon Mask</span>
                        <span className="widgetSmUserTitle">Softoware Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                {/*--- item --*/}
                <li className="widgetSmItem">
                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Elon Mask</span>
                        <span className="widgetSmUserTitle">Softoware Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                {/*--- item --*/}
                <li className="widgetSmItem">
                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Elon Mask</span>
                        <span className="widgetSmUserTitle">Softoware Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default WidgetSm;