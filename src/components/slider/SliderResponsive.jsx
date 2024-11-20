import React from 'react'
import './SliderResponsive.css'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";





const SliderResponsive = () => {

  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow:<IoArrowForwardCircleOutline />,
      prevArrow:<IoArrowBackCircleOutline />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
    <>
    <div className="container">
    <div className="slider-container">
        <Slider {...settings}>
          <div>
          <div className="CommonCustomer ">
            
            <div className="box1">
                <img src="image/men.png" alt="" />
                <div className="name">
                    <h2>Viezh Robert</h2>
                    <p>Warsaw, Poland</p>
                </div>
                <div className="rating">
                    <h3>4.5</h3>
                    <FaStar className='text-[#FEA250]'/>
                </div>
                <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
            </div>
            </div>

          </div>
          <div>
          <div className="CommonCustomer ">
            
            <div className="box1">
                <img src="image/girl.png" alt="" />
                <div className="name">
                    <h2>Yessica Christy</h2>
                    <p>Shanxi, China</p>
                </div>
                <div className="rating">
                    <h3>4.5</h3>
                    <FaStar className='text-[#FEA250]'/>
                </div>
                <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
            </div>
            </div>
          </div>
          <div>
          <div className="CommonCustomer ">
            
            <div className="box1">
                <img src="image/men2.png" alt="" />
                <div className="name">
                    <h2>Kim Young Jou</h2>
                    <p>Seoul, South Korea</p>
                </div>
                <div className="rating">
                    <h3>4.5</h3>
                    <FaStar className='text-[#FEA250]'/>
                </div>
                <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
            </div>
            </div>
          </div>
          
        
        </Slider>
      </div>
      </div>
    
    </>
  )
}

export default SliderResponsive

