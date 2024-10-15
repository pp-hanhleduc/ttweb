import React from "react";
import BlockTitle from "./BlockTitle";
import ContactBgShape from "../assets/images/shapes/contact-bg-shape-1-1.png";
import ContactImage from "../assets/images/resources/contact-1-1.jpg";

const Contact = () => {
  return (
    <section className="contact-one" id="contact">
      <img src={ContactBgShape} className="contact-one__bg-shape-1" alt="" />
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <form className="contact-form-validated contact-one__form">
              <BlockTitle
                textAlign="left"
                paraText="Liên hệ ngay"
                titleText={`Bạn có câu hỏi? \n Hãy gửi TopTop ngay!`}
              />
              <div className="row">
                <div className="col-lg-6">
                  <input type="text" placeholder="Họ tên" name="name" />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Email" name="email" />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Tiêu đề" name="subject" />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Số điện thoại" name="phone" />
                </div>
                <div className="col-lg-12">
                  <textarea placeholder="Nội dung" name="message"></textarea>
                </div>
                <div className="col-lg-12 text-left">
                  <button type="submit" className="thm-btn contact-one__btn">
                    <span>Gửi ngay!</span>
                  </button>
                </div>
              </div>
            </form>
            <div className="result"></div>
          </div>
          <div
            className="col-lg-5 d-flex wow fadeInRight"
            data-wow-duration="1500ms"
          >
            <div className="my-auto">
              <div className="contact-one__image">
                <img src={ContactImage.src} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
