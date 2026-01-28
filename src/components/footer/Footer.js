import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
//import logoImage from "../../assets/example-logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* First Column */}
      <div className={styles.addressAndPhoto}>
        <img
          src="/assets/settingsalt22x.png"
          alt="Logo"
          className={styles.footer_logo}
        />
        <h3 className={styles.footer_address}>ADDRESS</h3>
        <p className={styles.footer_text}>MIT, Mekelle, Tigray</p>
      </div>

      {/* Second Column */}
      <div className={styles.footer_column}>
        <h3 className={styles.footer_header}>Links</h3>
        <ul className={styles.footer_list}>
          <li>
            <Link to="/companies">Companies</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/tags">Tags</Link>
          </li>
        </ul>
      </div>

      {/* Third Column */}
      <div className={styles.footer_column}>
        <h3 className={styles.footer_header}>Company</h3>
        <ul className={styles.footer_list}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
        </ul>
      </div>

      {/* Fourth Column */}
      <div className={styles.footer_column}>
        <h3 className={styles.footer_header}>Support</h3>
        <ul className={styles.footer_list}>
          <li>
            <a href="#getting-started">Getting started</a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </div>

      {/* Fifth Column */}
      <div className={styles.footer_column}>
        <h3 className={styles.footer_header}>Legal</h3>
        <ul className={styles.footer_list}>
          <li>
            <a href="#privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="#terms">Terms and Conditions</a>
          </li>
          <li>
            <a href="#cookie-policy">Cookie Policy</a>
          </li>
        </ul>
      </div>
      {/* Bottom Section */}
      <div className={styles.footer_bottom}>
        {/* Left: Copyright Section */}
        <div className={styles.footer_copyright}>
          <span>&copy; 2025 Sheqlee Co., Ltd. All rights reserved.</span>
        </div>

        {/* Right: Social Media Section */}
        <div className={styles.footer_social}>
          <p className={styles.bottom_paragraph}>Follow us on</p>
          <div className={styles.footer_icons}>
            {/* <FaFacebook /> */}
            <img
              src="/assets/facebook.svg"
              alt="fb"
              className={styles.socialMediaIcon}
            />
            {/* <FaTwitter /> */}
            <img
              src="/assets/twitter.svg"
              alt="arrow"
              className={styles.socialMediaIcon}
            />

            {/* <FaInstagram /> */}
            <img
              src="/assets/instagram.svg"
              alt="arrow"
              className={styles.socialMediaIcon}
            />

            {/* <FaTelegram /> */}
            <img
              src="/assets/telegram.svg"
              alt="arrow"
              className={styles.socialMediaIcon}
            />

            {/* <FaLinkedin /> */}
            <img
              src="/assets/linkedin-logo.svg"
              alt="arrow"
              className={styles.socialMediaIcon}
            />

            {/* <FaYoutube /> */}
            <img
              src="/assets/youtube.svg"
              alt="arrow"
              className={styles.socialMediaIcon}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
