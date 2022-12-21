import React from 'react';
import BannerStyle from './banner.module.css';
import bannerImage from '../../images/logos/Frame.png';


const Banner = () => {
    return (
        <>
          <section className={BannerStyle.banner}>
          <div className="container">
             <div className="row">
                <div className="col-lg-6 col-md-12">
                   <div className={BannerStyle.bannerLeft}>
                      <h2>Let’s Grow Your Brand To The Next Level</h2>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                         Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                         <button>Hire Us</button>
                   </div>
                </div>
                <div className="col-lg-6 col-md-12">
                   <img src={bannerImage} alt="" className="img-fluid"/>
                </div>
             </div>
          </div>
          </section>  
        </>
    );
};

export default Banner;