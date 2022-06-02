import React, { useEffect, useState } from 'react';
import Slider from 'react-slick/lib/slider';
import customer1 from '../../images/customer-1.png'
import customer2 from '../../images/customer-2.png'
import customer3 from '../../images/customer-3.png'


const Client = () => {
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
  const [review, setReview] = useState()
    
    //===============================
    useEffect(() => {
     fetch('http://localhost:5000/getReview')
     .then(res => res.json())
     .then(data => setReview(data))
    },[review])

    return (
        <section className='client-container main-font py-5' style={{marginBottom: '7rem'}}>
          <div className="container">
             <h2 className='d-flex justify-content-center fw-bolder pt-5 pb-2'>Clients <p className='green-color ms-2'>Feedback</p></h2>
              <div className="row">
                <Slider {...settings}>
                    {
                     review?
                       review.map(elem => {
                         return (
                            <div className="clientCard mt-5 border py-3 px-4">
                               <h4 style={{fontWeight: '600', fontSize: '18px', textTransform: 'capitalize'}}>{elem.name}</h4>
                                  <span style={{fontWeight: '600',fontSize: '1rem'}}>{elem.companyinfo}</span>
                                  <p className='pe-3 pt-3' style={{fontSize: ''}}>{elem.discription}</p>
                            </div>
                        )
                    })
                    :
                    ''
                    }
                </Slider>
              </div>
          </div>
      </section>
    );
};

export default Client;