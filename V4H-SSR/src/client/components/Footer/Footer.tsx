import React from "react";
import styles from "../Footer/Footer.module.scss";
import { faLinkedin, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../media/assets/picturesV4H/logoAlb.svg";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerLogo}>
          <img src={logo} alt="/" />
        </div>
        <div className={styles.footerSections}>
          <div className={styles.footerSectionOne}>
            <div className={styles.footerTitleMain}>Let’s do it together!</div>
            <div className={styles.footerSubTitle}>Tell us a few words about your project</div>
            <div className={styles.sectionBtn}>
              <button>Get in touch</button>
            </div>
            <div className={styles.footerSocials}>
              <a href="https://www.youtube.com/" className="youtubeSocial">
                <FontAwesomeIcon icon={faFacebook} size="2x" color="white" opacity={0.6} />
              </a>
              <a href="https://www.facebook.com/" className="facebookSocial">
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" opacity={0.6} />
              </a>
              <a href="https://www.instagram.com/" className="instagramSocial">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" color="white" opacity={0.6} />
              </a>
            </div>
          </div>
          <div className={styles.footerSectionTwo}>
            <div className={styles.footerTitle}>Legacy</div>
            <ul>
              <li>
                <a>Cookie Policy</a>
              </li>
              <li>
                <a>Terms and Conditions</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerSectionThree}>
            <div className={styles.footerTitle}>Contact</div>
            <ul>
              <li>contact@viral4hype</li>
              <li>+40 753 754 321</li>
              <li>Bucharest Baba Novac 12,Romania, 400124</li>
            </ul>
          </div>
        </div>
        <div className={styles.rightsSection}>© 2023 Viral4Hype / ALL RIGHTS RESERVED.</div>
      </div>
    </div>
  );
};

export default Footer;
