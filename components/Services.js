import React from "react";
import BlockTitle from "./BlockTitle";

const Services = () => {
  return (
    <section className="service-one" id="features">
      <div className="container">
        <BlockTitle
          textAlign="center"
          paraText="Tính năng độc đáo"
          titleText={`TopTop mang đến cho bạn \n nhiều trải nghiệm khác biệt`}
        />
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-computer-graphic"></i>
                </div>
                <h3>
                  Đầu tư & Tích lũy <br></br> Tự động
                </h3>
                <p>Tự động đầu tư định kỳ, không yêu cầu thao tác thủ công.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-development"></i>
                </div>
                <h3>Bảo mật cao</h3>
                <p>
                  Tiền của khách hàng được bảo vệ bởi những dịch vụ an toàn
                  nhất.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-development1"></i>
                </div>
                <h3>Lãi xuất cạnh tranh</h3>
                <p>
                  Thông tin rõ ràng, hiển thị lãi suất và chi phí minh bạch,
                  không phụ phí ẩn.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-responsive"></i>
                </div>
                <h3>Thanh khoản linh hoạt</h3>
                <p>
                  Người dùng có thể rút tiền hoặc chuyển đổi kênh đầu tư nhanh
                  chóng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
