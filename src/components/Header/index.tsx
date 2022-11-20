import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-gtag";
import React from "react";
import * as styles from "./index.module.scss";

type Props = {
  hidden: boolean;
};
const Header: React.FC<Props> = ({ hidden }) => {
  return (
    <header className={!hidden && styles.root}>
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
