import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Add from "../../assets/Plus.svg";
import Side_Arrow from "../../assets/Side_arrow.svg";

const MultiCarousel = ({ onSelectCategory }) => {
  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img src={Side_Arrow} alt="" />
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img src={Add} alt="" className="mr-4" />
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className="multiContainer mb-5 pt-6">
      <Slider {...settings}>
      <span
          className="font-semibold text-sm cursor-pointer"
          onClick={() => onSelectCategory(null)}
        >
          All
        </span>
        <span
          className="font-semibold text-sm cursor-pointer"
          onClick={() => onSelectCategory("machine learning")}
        >
          Machine Learning
        </span>
        <span
          className="font-semibold text-sm cursor-pointer"
          onClick={() => onSelectCategory("supervised learning")}
        >
          Supervised Learning
        </span>
        <span
          className="font-semibold text-sm cursor-pointer"
          onClick={() => onSelectCategory("deep learning")}
        >
          Deep Learning
        </span>
        <span
          className="font-semibold text-sm cursor-pointer"
          onClick={() => onSelectCategory("python")}
        >
          Python
        </span>
        <span
          className="font-semibold text-sm cursor-pointer"
          onClick={() => onSelectCategory("maths")}
        >
          Maths
        </span>
        <span
          className="font-semibold text-sm cursor-pointer"
          onClick={() => onSelectCategory("unsupervised learning")}
        >
          Unsupervised Learning
        </span>
        <span
          className="font-semibold text-sm cursor-pointer"
          onClick={() => onSelectCategory("neural networks")}
        >
          Neural Networks
        </span>
        <span
          className="font-semibold text-sm cursor-pointer"
          onClick={() => onSelectCategory("computer vision")}
        >
          Computer Vision
        </span>
      </Slider>
    </div>
  );
};

export default MultiCarousel;

