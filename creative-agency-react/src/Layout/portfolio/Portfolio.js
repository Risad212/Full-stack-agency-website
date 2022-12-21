import React from 'react';
import './Portfolio.css';
import carosoul1 from '../../images/carousel-1.png';
import carosoul2 from '../../images/carousel-2.png';
import carosoul3 from '../../images/carousel-3.png';
import carosoul4 from '../../images/carousel-4.png';
import carosoul5 from '../../images/carousel-5.png';
import Slider from "react-slick";

const Portfolio = () => {
    const portfolioData = [carosoul1,carosoul2,carosoul3,carosoul4,carosoul5]
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
    return (
        <section className='portfolio main-font py-5'>
           <div className="container">
              <h2 className='d-flex justify-content-center text-white pt-5 pb-5'>Here are some of <p className='green-color ps-2'>our works</p></h2>
                <div className="portfolio-card">
                  <div className="row">
                    <Slider {...settings}>
                       {
                         portfolioData.map(elem => {
                           return(
                             <div className='col-4'>
                                <img src={elem} alt=""  style={{width: '100%', height: '300px', objectFit: 'cover'}}/>
                             </div>
                           )
                         })
                       }
                    </Slider>
                  </div>
                 </div>
               </div>
        </section>
    );
};

export default Portfolio;