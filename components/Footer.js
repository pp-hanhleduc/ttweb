import React, { useContext } from "react";

import FooterLogo from "../assets/images/logo-1-1.png";

const Footer = () => {
  return (
    <div>
      <section className="mailchimp-one">
        <div className="container wow fadeInUp">
          <div className="inner-container">
            <div className="mailchimp-one__icon">
              <i className="apton-icon-mail"></i>
            </div>
            <form action="#" className="mailchimp-one__form">
              <input
                type="text"
                placeholder="Nhập địa chỉ email"
                name="email"
              />
              <button className="thm-btn mailchimp-one__btn" type="submit">
                <span>Đăng ký ngay</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__upper">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-widget footer-widget__about">
                  <a href="index.html">
                    <img src={FooterLogo.src} width="129" alt="" />
                  </a>
                  <p>
                    TopTop - Nền tảng Đầu tư & Tích lũy <br /> Linh hoạt
                  </p>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="footer-widget__links-wrap">
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Công ty</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <a href="#">Về chúng tôi</a>
                      </li>
                      <li>
                        <a href="#">Tính năng</a>
                      </li>
                      <li>
                        <a href="#">Gói tích lũy</a>
                      </li>
                      <li>
                        <a href="#">Liên hệ</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Khám phá</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <a href="#">Tin tức</a>
                      </li>
                      <li>
                        <a href="#">Gói tích lũy</a>
                      </li>
                      <li>
                        <a href="#">Tải TopTop ngay</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Links</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <a href="#">Help</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms of Use</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 d-flex align-items-center justify-content-xl-end justify-content-lg-end justify-content-md-center justify-content-sm-center">
                <div className="footer-widget">
                  <div className="footer-widget__social">
                    <a href="#">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container text-center">
            <p>© Copyright 2024 by TopTop</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
