import React, { useState } from "react";
import ModalVideo from "react-modal-video";

import BannerShape from "../assets/images/shapes/banner-shape-1-1.png";
import BannerBG from "../assets/images/resources/banner-image-1-1.jpg";
import BannerMoc from "../assets/images/resources/banner-moc-1-1.png";

const Banner = () => {
  const [open, setOpen] = useState({
    isOpen: false,
  });
  const openModal = () => {
    setOpen({
      isOpen: true,
    });
  };

  return (
    <section className="banner-one" id="home">
      <img src={BannerShape.src} className="banner-one__bg-shape-1" alt="" />
      <div
        className="banner-one__bg"
        style={{ backgroundImage: `url(${BannerBG.src})` }}
      ></div>
      <div className="container">
        <ModalVideo
          channel="youtube"
          isOpen={open.isOpen}
          videoId="Kl5B6MBAntI"
          onClose={() => setOpen({ isOpen: false })}
        />
        <div className="banner-one__video video-popup">
          <i className="fa fa-play"></i>
        </div>
        <div className="banner-one__moc">
          <img
            src={BannerMoc.src}
            className="wow fadeInUp"
            data-wow-duration="1500ms"
            alt=""
          />
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="banner-one__content">
              <h2>TOPTOP</h2>
              <h3>
                Nền tảng <br /> Đầu tư & Tích lũy <br /> Linh hoạt
              </h3>
              <p>
                Tích hợp các công cụ theo dõi và bảo mật cao, TopTop giúp <br />{" "}
                tối ưu hóa lợi nhuận và mang đến trải nghiệm đầu tư <br /> thông
                minh & an toàn.
              </p>
              <a href="#" className="thm-btn banner-one__btn">
                <span>Khám phá ngay</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
