import { FooterContainer } from "./footer.styles";
import { Typography, Space } from "antd";
import {
  MailOutlined,
  WhatsAppOutlined,
  GithubOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import logoImg from "../../assets/dynastySales_logo.png";

const { Title, Text } = Typography;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand-wrapper">
            <img
              src={logoImg}
              alt="DynastySales Logo"
              className="footer-logo-img"
            />
            <div className="footer-logo-text">DynastySales</div>
          </div>
          <Text
            style={{ color: "#434343", lineHeight: "1.6", fontWeight: 500 }}
          >
            Premium vinyl and music store. We bring the best artists and albums
            directly to your doorstep with quality and passion.
          </Text>
        </div>

        <div className="footer-section">
          <Title level={5} className="section-title">
            Contact Us
          </Title>
          <a href="mailto:710.jag@gmail.com" className="contact-item">
            <MailOutlined /> 710.jag@gmail.com
          </a>
          <a
            href="https://wa.me/5493513414965"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <WhatsAppOutlined /> WhatsApp Support
          </a>
          <div className="contact-item">
            <EnvironmentOutlined /> Córdoba, Argentina
          </div>
        </div>

        <div className="footer-section">
          <Title level={5} className="section-title">
            Developer
          </Title>
          <Space direction="vertical" size="middle">
            <a
              href="https://github.com/Javier4286"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <GithubOutlined /> Javier4286
            </a>
            <Text className="contact-item" style={{ cursor: "pointer" }}>
              <GlobalOutlined /> Privacy Policy
            </Text>
          </Space>
        </div>
      </div>

      <div className="copyright">
        © {currentYear} DynastySales. All rights reserved. <br />
        Designed & Developed by Javier.
      </div>
    </FooterContainer>
  );
};

export default Footer;
