import * as React from "react";
import styles from "./layout.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
