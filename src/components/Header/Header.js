import React from "react";
import styles from "./Header.module.scss";

import logo from "./logo.jpg";
import main from "./mainimg.jpg";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} className={styles.logo} alt="" />
      <img src={main} alt="" />
    </div>
  );
};

export default Header;
