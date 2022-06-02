import React from 'react';
import slack  from '../../images/logos/slack.png';
import google from '../../images/logos/google.png'
import uber from '../../images/logos/uber.png';
import netflix from '../../images/logos/netflix.png'
import airbnd from '../../images/logos/airbnb.png';
import './Brand.css';

const Brand = () => {
    const brandImg = [slack, google, uber, netflix, airbnd];
    return (
        <section className='brand-container mt-5 pb-5'>
          <div className="container brand-wrapper">
             {
              brandImg.map(elem =>
                <div>
                  <img src={elem}/>
               </div>
              )
             }
          </div>
        </section>
    );
};

export default Brand;