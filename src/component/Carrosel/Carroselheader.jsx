import React, { useState } from 'react';
import './CarouselComponent.css';

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

const slides = [
  {
    type: 'image',
    src: '/charity.jpeg',
    caption: 'Supporting Local Charities',
  },
  {
    type: 'image',
    src: '/cooking.jpeg',
    caption: 'Empowering Through Cooking Classes',
  },
  {
    type: 'image',
    src: '/20250407094629_IMG_1837.JPG',
    caption: 'Skills Training for a Brighter Future',
  },
];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const setSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
  <div className='main_slide'>
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          className={`mySlides fade ${index === currentSlide ? 'active' : ''}`}
          key={index}
        >
          <div className="numbertext">{`${index + 1} / ${slides.length}`}</div>
       <img
  src={slide.src}
  alt={slide.caption}
  style={{
    width: '100%',
    height: '80vh',
    objectFit: 'cover',
    borderRadius: '8px',
  }}
/>
          <div className="text">{slide.caption}</div>
        </div>
      ))}
      <div className="prev" onClick={prevSlide}>&#10094;</div>
      <div className="next" onClick={nextSlide}>&#10095;</div>

      <div style={{ textAlign: 'center' }}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setSlide(index)}
          ></span>
        ))}
      </div>
    </div>
   </div>
  );
};

export default CarouselComponent;
