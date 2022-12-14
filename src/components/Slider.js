import React from "react";
import Slider from "react-slick";
import CardCarousel from "./CardCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slidersection = ({blogs}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="m-0">
        <Slider {...settings} className="h-[420px]">
          {blogs.map((blog, index) => (
            <div key={index}>
              <CardCarousel image={blog.img} blog={blog}/>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slidersection;
