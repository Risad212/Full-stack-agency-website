import React from 'react';
import './FeaturesInfo.css'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const FeatureInfo = () => {
    return (
        <div className='featured'>
           <div className="featuredItem">
               <span className="featuredTitle">Revanue</span>
               <div className="featuredMoneyContainer">
                  <span className="featuredMoney">$2,540</span>
                  <span className="featuredMoneyRate">-11.4<ArrowDownwardIcon className='featureIcon negative'/></span>
               </div>
               <span className="featureSub">Compare to last Month</span>
           </div>
           {/*-- featured item --*/}
           <div className="featuredItem">
               <span className="featuredTitle">Sales</span>
               <div className="featuredMoneyContainer">
                  <span className="featuredMoney">$3,540</span>
                  <span className="featuredMoneyRate">-1.4<ArrowDownwardIcon className='featureIcon negative'/></span>
               </div>
               <span className="featureSub">Compare to last Month</span>
           </div>
           {/*-- featured item --*/}
           <div className="featuredItem">
               <span className="featuredTitle">Cost</span>
               <div className="featuredMoneyContainer">
                  <span className="featuredMoney">$1,540</span>
                  <span className="featuredMoneyRate">+12.4<ArrowUpwardIcon className='featureIcon'/></span>
               </div>
               <span className="featureSub">Compare to last Month</span>
           </div>
        </div>
    );
};

export default FeatureInfo;