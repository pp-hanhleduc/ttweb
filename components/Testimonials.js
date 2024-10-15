import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SwiperCore, { Pagination, Thumbs, Controller } from "swiper";
SwiperCore.use([Pagination, Thumbs, Controller]);
import Swiper from "react-id-swiper";
import BlockTitle from "./BlockTitle";

import TestiQoute from "../assets/images/shapes/testi-qoute-1-1.png";

import TestiImageOne from "../assets/images/resources/testi-1-1.jpg";
import TestiImageTwo from "../assets/images/resources/testi-1-2.jpg";
import TestiImageThree from "../assets/images/resources/testi-1-3.jpg";

const Testimonials = (props) => {
  const paramsTwo = {
    observer: true,
    observeParents: true,
    speed: 1400,
    mousewheel: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".testimonials-one__pagination-wrap .swiper-pagination",
      clickable: true,
    },
  };

  const paramsOne = {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    speed: 1400,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  return (
    <section className="testimonials-one">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="testimonials-one__thumb-carousel-wrap">
              <div className="testimonials-one__icon">
                <div className="testimonials-one__icon-inner">
                  <img src={TestiQoute.src} alt="" />
                </div>
              </div>
              <div className="testimonials-one__thumb-carousel">
                <Swiper {...paramsOne}>
                  <div className="swiper-slide">
                    <div className="testimonials-one__image">
                      <img src={TestiImageOne.src} alt="Awesome Image" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__image">
                      <img src={TestiImageTwo.src} alt="Awesome Image" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__image">
                      <img src={TestiImageThree.src} alt="Awesome Image" />
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          </Col>
          <Col xl={6} className="d-flex">
            <div className="my-auto">
              <BlockTitle
                textAlign="left"
                paraText="TopTop - Nền tảng Đầu tư & Tích lũy Linh hoạt"
                titleText={`Khách Hàng Nói Về Chúng Tôi`}
              />
              <div className="testimonials-one__carousel">
                <Swiper {...paramsTwo}>
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                        TopTop giúp tôi dễ dàng quản lý tài chính cá nhân hơn
                        rất nhiều. Chỉ cần thiết lập mục tiêu, mọi thứ tự động
                        diễn ra, từ tích lũy đến đầu tư. Lợi nhuận đều đặn và
                        bảo mật cực kỳ an tâm.
                      </p>

                      <h3 className="testimonials-one__title">
                        Lê Minh Văn - Nhân viên văn phòng{" "}
                      </h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                        Trước đây mình thường gặp khó khăn trong việc tiết kiệm,
                        nhưng từ khi sử dụng TopTop, mình đã có kế hoạch tích
                        lũy rõ ràng hơn. Tính năng tự động đầu tư rất tiện lợi,
                        giúp mình không bỏ lỡ cơ hội sinh lời.
                      </p>

                      <h3 className="testimonials-one__title">
                        Trần Thị Hồng - Phóng viên{" "}
                      </h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                        Tôi thích cách TopTop cung cấp nhiều kênh đầu tư đa dạng
                        và phân tích tài chính rõ ràng. Đây là công cụ hữu ích
                        để tối ưu hóa lợi nhuận từ số tiền nhàn rỗi và đảm bảo
                        tài chính bền vững cho tương lai.
                      </p>

                      <h3 className="testimonials-one__title">
                        Lê Quốc Anh - Chuyên gia Bất động sản
                      </h3>
                    </div>
                  </div>
                </Swiper>
                <div className="testimonials-one__pagination-wrap">
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
