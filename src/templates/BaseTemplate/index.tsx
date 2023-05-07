import * as React from "react";
import Header from "../../components/Header";
import "modern-css-reset";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fontsource/noto-sans-jp/300.css";
import "@fontsource/lato";
import SideMenu from "../../components/SideMenu";
import { Helmet } from "react-helmet";
import { config } from "@fortawesome/fontawesome-svg-core";
import * as styles from "./index.module.scss";

type Props = { children: any };

config.autoAddCss = false;

const Base: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>free技術log</title>
        <meta
          name="description"
          content="フリーランスエンジニアのブログです。主に技術情報について投稿しています。"
        />
      </Helmet>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.contentsWrapper}>{children}</div>
        <SideMenu />
      </div>
      <footer className={styles.footer}>
        ©free 技術log all rights reserved.
      </footer>
    </>
  );
};

export default Base;
