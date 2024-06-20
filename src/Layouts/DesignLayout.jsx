import React from "react";
import moment from "moment";
import { Outlet } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import SocialIcons from "../component/Footer/SocialIcon";
import ItemsContainer from "../component/Footer/FooterItems";
import { Icons } from "../Utils/Menu";
import "../component/Footer/footer.css";
import "../component/Nav/navbar.css";
import '../component/Carrosel/CarouselComponent.css';
import { navItems } from "../Utils/Menu";

import { useState } from "react";

const DesignLayout = () => {
  const today = moment().format("YYYY");
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
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <div className="container_main">
            <div>
              <img src="/rawa_logos.png" alt="updated logo" className="updated_logo" />
            </div>
            <div className="navHeader">
          
              {navItems.map((item, index) => (
                  <Nav.Link key={index} href={item.href} className={item.className}>
                    {item.label}
                  </Nav.Link>
                ))}
      
            </div>
          </div>
        </Container>
      </Navbar>
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

      <Outlet />

      <footer className="bg-gray-900 text-white">
        <div className="footer_sect">
          <ItemsContainer />
          <hr />
          <div className="footer_text">
            <span>©{today} Appy. All rights reserved.</span>
            <span>Terms · Privacy Policy</span>
            <SocialIcons Icons={Icons} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default DesignLayout;
