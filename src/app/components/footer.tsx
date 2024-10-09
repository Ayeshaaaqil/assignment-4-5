import Link from "next/link";
import Style from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className={Style.footerContainer}>
        <div className={Style.footerSection}>
          <h2>About Us</h2>
          <p>"We are passionate about the beauty,artistry,and healing power of flowers.
            Our blog was born out of a deep love for nature and a desire to share the incredible stories that flowers can tell.
            Whether you are a gardening enthusiast,a lover of floral decor,or someone simply looking to brighten up your space,
            we are here to inspire and guide you.".</p>
        </div>
        <div className={Style.footerSection}>
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className={Style.footerSection}>
          <h2>Contact Us:+12345678971</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +123456789</p>
        </div>
      </div>
      <div className={Style.footerBottom}>
        <p>&copy; 2024 My Blog | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;