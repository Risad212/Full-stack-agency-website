import React from 'react';
import Chart from '../../Components/chart/Chart';
import FeatureInfo from '../../Components/featureinfo/FeatureInfo';
import { UserData } from '../../Data/UserAnalyticsData';
import WidgetLg from '../../Components/widgetLg/WidgetLg';
import WidgetSm from '../../Components/widgetSm/WidgetSm';
import './home.css';


const Home = () => {
    return (
        <div className='home'>
           <FeatureInfo />
           <Chart data={UserData} title="User Analytics" grid dataKey='Active User'/>
           <div className="homeWidget">
             <WidgetSm />
             <WidgetLg />
           </div>
        </div>
    );
};

export default Home;