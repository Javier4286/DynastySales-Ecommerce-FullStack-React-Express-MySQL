import { FooterContainer, FooterDescription } from "./footer.styles";
import { Typography, Space } from "antd";
import {
  MailOutlined,
  WhatsAppOutlined,
  GithubOutlined,
  LinkedinOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import logoImg from "../../assets/dynastySales_logo.png";
import useThemeStore from "../../store/useThemeStore";

const { Title } = Typography;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isDarkMode } = useThemeStore();

  return (
    <FooterContainer $isDarkMode={isDarkMode}>
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
          <FooterDescription $isDarkMode={isDarkMode}>
            Premium vinyl and music store. We bring the best artists and albums
            directly to your doorstep with quality and passion.
          </FooterDescription>
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
            <a
              href="https://linkedin.com/in/javier-alexis-gonzalez-0194113ba"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <LinkedinOutlined /> LinkedIn
            </a>
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
