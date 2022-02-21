import * as React from 'react'
import styles from "./header.module.css";
import { ReactComponent as WorldSvg } from "../../assets/Svg/world.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <h3 className={styles.headline}>My Overview</h3>
      <div className={styles.worldIcon}>
        {" "}
        <WorldSvg />
      </div>
    </header>
  );
};

export default Header;
