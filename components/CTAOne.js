import React from "react";
import BlockTitle from "./BlockTitle";

import CtaShape1 from "../assets/images/shapes/cta-1-shape-1.png";
import CtaShape2 from "../assets/images/shapes/cta-1-shape-2.png";
import CtaMoc1 from "../assets/images/resources/cta-1-moc-1.png";

const CTAOne = () => {
  return (
    <section className="cta-one">
      <img src={CtaShape1.src} className="cta-one__bg-shape-1" alt="" />
      <img src={CtaShape2.src} className="cta-one__bg-shape-2" alt="" />
      <div className="container">
        <div className="cta-one__moc wow fadeInLeft" data-wow-duration="1500ms">
          <img src={CtaMoc1.src} className="cta-one__moc-img" alt="" />
        </div>
        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div className="cta-one__content">
              <BlockTitle
                textAlign="left"
                paraText="Ứng dụng TopTop"
                titleText={`Tích lũy Thông minh, \n Đầu tư Vững bền`}
              />
              <div className="cta-one__text">
                <p>
                  TopTop là ứng dụng đầu tư tích lũy hàng đầu, mang đến giải
                  pháp tài chính thông minh cho người dùng.
                </p>
              </div>
              <ul className="list-unstyled cta-one__list">
                <li>
                  <i className="fa fa-check-circle"></i>
                  <b>Đa dạng kênh đầu tư:</b> Tiết kiệm, vàng, chứng khoán, và
                  quỹ mở, phù hợp mọi nhu cầu tài chính.
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  <b>Bảo mật hàng đầu:</b> Ứng dụng công nghệ mã hóa hiện đại,
                  đảm bảo an toàn dữ liệu và giao dịch.
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  <b>Cá nhân hóa:</b> Tư vấn tài chính chuyên sâu, xây dựng kế
                  hoạch đầu tư theo từng mục tiêu riêng biệt.
                </li>
              </ul>
              <a href="#" className="thm-btn cta-one__btn">
                <span>Tải app ngay!</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAOne;
