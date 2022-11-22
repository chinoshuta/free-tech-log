import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-gtag";
import React, { useState } from "react";
import * as styles from "./index.module.scss";

const Header: React.FC = () => {
  const [isHidden, setIsHidden] = useState<boolean>();
  let prevScroll = 0;
  const handleScroll = () => {
    let scrollY = window.pageXOffset || window.scrollY;
    if (scrollY > prevScroll) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    prevScroll = scrollY;
  };
  React.useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`${styles.root} ${isHidden && styles.hidden}`}>
      <div className={styles.wrapper}>
        <Link to="/">
          <h1 className={styles.title}>free 技術log</h1>
        </Link>
        <div className={styles.menu}>
          <OutboundLink href="/about">
            <li>当ブログについて</li>
          </OutboundLink>
          {/* <li>お問い合せ</li> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
