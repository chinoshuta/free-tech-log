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
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import clsx from "clsx";

type Props = { children: any };

config.autoAddCss = false;

const Base: React.FC<Props> = ({ children }) => {
  const [isHeaderHide, seIsHeaderHide] = React.useState<boolean>(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y === 0) {
      seIsHeaderHide(false);
      return;
    }
    if (prevPos.y > currPos.y) {
      // 下スクロールの場合はヘッダー非表示
      seIsHeaderHide(true);
      return;
    }
    seIsHeaderHide(false);
  }, []);
  return (
    <>
      <Helmet>
        <title>free技術log</title>
        <meta
          name="description"
          content="フリーランスエンジニアのブログです。主に技術情報について投稿しています。"
        />
      </Helmet>
      <div className={clsx(styles.headerWrap, isHeaderHide && styles.hidden)}>
        <Header />
      </div>
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
