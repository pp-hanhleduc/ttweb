import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "./BlockTitle";

const Pricing = (props) => {
  return (
    <section className="pricing-one" id="pricing">
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="Gói Tich Lũy TopTop"
          titleText={`Lựa chọn gói tích lũy \n Phù hợp nhu cầu của bạn`}
        />
        <div id="month">
          <Row>
            <Col lg={4}>
              <div className="pricing-one__single">
                <div className="pricing-one__circle"></div>
                <div className="pricing-one__inner">
                  <p>Không kỳ hạn</p>
                  <h3>3.5%</h3>
                  <ul className="list-unstyled pricing-one__list">
                    <li>Tích lũy linh hoạt</li>
                    <li>Tính lãi hàng ngày</li>
                    <li>Tự động gia hạn</li>
                    <li>Nạp rút miễn phí</li>
                  </ul>
                  <a href="#" className="thm-btn pricing-one__btn">
                    <span>Tích lũy ngay</span>
                  </a>

                  <span>Không phí ẩn!</span>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="pricing-one__single">
                <div className="pricing-one__circle"></div>
                <div className="pricing-one__inner">
                  <p>3 tháng</p>
                  <h3>5.5%</h3>
                  <ul className="list-unstyled pricing-one__list">
                    <li>Tích lũy linh hoạt</li>
                    <li>Tính lãi hàng ngày</li>
                    <li>Tự động gia hạn</li>
                    <li>Nạp rút miễn phí</li>
                  </ul>
                  <a href="#" className="thm-btn pricing-one__btn">
                    <span>Tích lũy ngay</span>
                  </a>

                  <span>Không phí ẩn!</span>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="pricing-one__single">
                <div className="pricing-one__circle"></div>
                <div className="pricing-one__inner">
                  <p>12 tháng</p>
                  <h3>7% </h3>
                  <ul className="list-unstyled pricing-one__list">
                    <li>Tích lũy linh hoạt</li>
                    <li>Tính lãi hàng ngày</li>
                    <li>Tự động gia hạn</li>
                    <li>Nạp rút miễn phí</li>
                  </ul>
                  <a href="#" className="thm-btn pricing-one__btn">
                    <span>Tích lũy ngay</span>
                  </a>

                  <span>Không phí ẩn!</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
