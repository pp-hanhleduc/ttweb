import React from "react";
import { Container } from "react-bootstrap";
import Swiper from "react-id-swiper";
import BrandImage1 from "../assets/images/resources/brand1.png";
import BrandImage2 from "../assets/images/resources/brand2.png";
import BrandImage3 from "../assets/images/resources/brand3.png";
import BrandImage4 from "../assets/images/resources/brand4.png";
import BrandImage5 from "../assets/images/resources/brand5.png";
import BrandImage6 from "../assets/images/resources/brand6.png";
import BrandImage7 from "../assets/images/resources/brand7.png";
import BrandImage8 from "../assets/images/resources/brand8.png";
import BrandImage9 from "../assets/images/resources/brand9.png";
import BrandImage10 from "../assets/images/resources/brand10.png";

const Clients = (props) => {
  const params = {
    speed: 1000,
    spaceBetween: 100,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slidesPerView: 5,
    rebuildOnUpdate: true,
    // Responsive breakpoints
    breakpoints: {
      0: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      767: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
      991: {
        spaceBetween: 50,
        slidesPerView: 4,
      },
      1499: {
        slidesPerView: 5,
      },
    },
  };
  return (
    <section className="brand-one">
      <Container>
        <Swiper className="brand-one__carousel" {...params}>
          <div className="item">
            <img src={BrandImage1.src} alt="" />
          </div>
          <div className="item">
            <img src={BrandImage2.src} alt="" />
          </div>
          <div className="item">
            <img src={BrandImage3.src} alt="" />
          </div>
          <div className="item">
            <img src={BrandImage4.src} alt="" />
          </div>
          <div className="item">
            <img src={BrandImage5.src} alt="" />
          </div>
          <div className="item">
            <img src={BrandImage6.src} alt="" />
          </div>
          <div className="item">
            <img src={BrandImage7.src} alt="" />
          </div>
          <div className="item">
            <img src={BrandImage8.src} alt="" />
          </div>
          <div className="item">
            <img src={BrandImage9.src} alt="" />
          </div>
          <div className="item">
            <img src={BrandImage10.src} alt="" />
          </div>
        </Swiper>
      </Container>
    </section>
  );
};

export default Clients;
