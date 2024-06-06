import React from 'react';
import Slider from 'react-slick';
import './carousel.scss'; // Import your SCSS file for additional styles

const CustomCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    { src: "/images/news1.jpg", alt: "Haber 1" },
    { src: "/images/galeri2.jpg", alt: "Haber 2" },
    { src: "/images/galeri3.jpg", alt: "Haber 3" },
    { src: "/images/news4.jpg", alt: "Haber 4" }
  ];

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="carousel-item">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </Slider>
  );
};

export default CustomCarousel;
