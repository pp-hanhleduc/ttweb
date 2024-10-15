import React from "react";
import { Container } from "react-bootstrap";
import BlockTitle from "./BlockTitle";
import AccordionItem from "./AccordionItem";
import faqBG from "../assets/images/shapes/faq-bg-1-1.png";

const FAQ = (props) => {
  return (
    <section className="faq-one">
      <img src={faqBG.src} className="faq-one__bg-shape-1" alt="" />
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="TopTop - Nền tảng Đầu tư & Tích lũy Linh hoạt"
          titleText={`Những câu hỏi thường gặp?`}
        />
        <div className="accrodion-grp faq-accrodion">
          <AccordionItem
            title="Làm thế nào để bắt đầu tích lũy với TopTop?"
            content="Bạn chỉ cần tạo tài khoản, chọn mục tiêu tài chính và kênh đầu tư phù hợp, sau đó thiết lập số tiền tích lũy."
            status={false}
          />
          <AccordionItem
            title="Tiền của tôi có an toàn khi đầu tư qua TopTop không?"
            content="TopTop sử dụng công nghệ bảo mật tiên tiến và mã hóa dữ liệu, đảm bảo an toàn cho tài sản và thông tin cá nhân của người dùng."
            status={true}
          />
          <AccordionItem
            title="Tôi có thể rút tiền tích lũy bất kỳ lúc nào không?"
            content="Bạn có thể rút tiền tích lũy dễ dàng và nhanh chóng từ tài khoản TopTop với tính thanh khoản linh hoạt."
            status={false}
          />
          <AccordionItem
            title="Tôi có thể đầu tư vào nhiều kênh cùng lúc không?"
            content="Hoàn toàn có thể. TopTop cho phép bạn phân bổ vốn vào nhiều kênh đầu tư khác nhau để tối ưu hóa lợi nhuận."
            status={false}
          />
          <AccordionItem
            title="Làm sao để giới thiệu bạn bè và nhận ưu đãi từ TopTop?"
            content="Bạn có thể sử dụng tính năng <b>Mời bạn bè</b> trong ứng dụng để giới thiệu TopTop, và cả bạn lẫn người được giới thiệu đều sẽ nhận được ưu đãi."
            status={false}
          />
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
