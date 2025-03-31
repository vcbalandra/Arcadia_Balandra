import React from 'react';
import Wrapper from '../assets/wrappers/Carousel';
import img1 from "../assets/images/arcadia-bcg.jpg"; 
import img2 from "../assets/images/background.jpg"; 
import img3 from "../assets/images/hero-img.jpg"; 

const Carousel = () => {
  return (
    <Wrapper>
        <div className="carousel-container">
            <div className="container">
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img1}
              className="d-block w-100 img"
              alt="First Slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              className="d-block w-100 img"
              alt="Second Slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              className="d-block w-100 img"
              alt="Third Slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      </div>
    </Wrapper>
  );
};

export default Carousel;