import React, { useState } from 'react';
import './CarouselComponent.css';

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { type: 'video', src: '/reliance.mp4' },
    { type: 'image', src: '/Strengthen Local Capacities_banner.png'},
    { type: 'video', src: '/community.mp4', }
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
          {slide.type === 'video' ? (
            <video src={slide.src} autoPlay loop muted style={{ width: '100%' }} />
          ) : (
            <img src={slide.src} alt={slide.caption} style={{ width: '100%' }} />
          )}
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
