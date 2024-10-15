import React from "react";
import BlockTitle from "./BlockTitle";

import CTAImage1 from "../assets/images/resources/cta-2-moc-1.png";
import CTAImage2 from "../assets/images/resources/cta-2-moc-2.png";
import CTAImage3 from "../assets/images/resources/cta-2-moc-3.png";

const CTATwo = () => {
  return (
    <section className="cta-two">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cta-two__content">
              <BlockTitle
                textAlign="left"
                paraText="TopTop"
                titleText={`Vì một Tương lai \n Tự do Tài chính`}
              />
              <div className="cta-two__icon-wrap">
                <div className="cta-two__icon-single">
                  <div className="cta-two__icon">
                    <i className="apton-icon-app-development"></i>
                  </div>
                  <h3>
                    Lãi xuất <br /> Hấp dẫn
                  </h3>
                </div>
                <div className="cta-two__icon-single">
                  <div className="cta-two__icon">
                    <i className="apton-icon-computer-graphic1"></i>
                  </div>
                  <h3>
                    Tích lũy <br /> Tự động
                  </h3>
                </div>
              </div>
              <div className="cta-two__text">
                <p>
                  Với các giải pháp đầu tư tự động, đa dạng kênh như tiết kiệm,
                  vàng, chứng khoán và quỹ mở, TopTop giúp bạn tối ưu hóa dòng
                  tiền nhàn rỗi một cách dễ dàng.
                </p>
              </div>
              <a href="#" className="thm-btn cta-two__btn">
                <span>Cài đặt ngay!</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="cta-two__images d-flex justify-content-end align-items-end flex-column">
              <img
                src={CTAImage1.src}
                className="wow fadeInUp"
                data-wow-duration="1500ms"
                alt=""
              />
              <img
                src={CTAImage2.src}
                className="wow fadeInUp"
                data-wow-duration="1500ms"
                alt=""
              />
              <img
                src={CTAImage3.src}
                className="wow fadeInUp"
                data-wow-duration="1500ms"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTATwo;
