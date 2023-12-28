// components/Footer.js

import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer} lg:mt-0 mt-12`}>
      <div className="whitespace-nowrap">
        <p>Mateusz Martyna 2024 &copy;</p>
      </div>
      <div className="flex gap-4 w-full items-right justify-end">
        <a
          href="https://twitter.com/mateusz_mww"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FontAwesomeIcon icon={faTwitter} className={styles.footerIcon} />
        </a>
        <a
          href="https://github.com/WhiteWolfWCY"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FontAwesomeIcon icon={faGithub} className={styles.footerIcon} />
        </a>
        <a
          href="https://www.linkedin.com/in/mateuszmartyna/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FontAwesomeIcon icon={faLinkedin} className={styles.footerIcon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
