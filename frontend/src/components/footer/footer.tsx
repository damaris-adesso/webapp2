import * as React from "react";
import styles from "./footer.module.css";
import { ReactComponent as FolderSvg } from "../../assets/Svg/folder.svg";
import { ReactComponent as SettingsSvg } from "../../assets/Svg/settings.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.overview}>
        <FolderSvg />
        <p className={styles.text}>My Overview</p>
      </div>
      <div className={styles.settings}>
        <SettingsSvg />
        <p className={styles.text}>Settings</p>
      </div>
    </footer>
  );
};

export default Footer;
