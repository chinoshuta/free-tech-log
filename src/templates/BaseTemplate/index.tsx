import * as React from "react";
import Header from "../../components/Header";
import styled from "styled-components";
import "modern-css-reset";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fontsource/noto-sans-jp/300.css";
import "@fontsource/lato";
import SideMenu from "../../components/SideMenu";
import { Helmet } from "react-helmet";
import { config } from "@fortawesome/fontawesome-svg-core";
import * as styles from "./index.module.scss";

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 60px;
  align-items: flex-start;
  min-height: calc(100vh - 69px - 37px);
  @media screen and (max-width: 420px) {
    display: block;
    padding: 0;
  }
`;
const Footer = styled.div`
  width: 100%;
  background-color: #254678;
  font-size: 14px;
  text-align: center;
  padding: 8px;
  color: white;
`;

const ContentsWrapper = styled.div`
  width: 660px;
  background-color: white;
  @media screen and (max-width: 420px) {
    width: 85%;
    margin: 30px auto 0;
  }
`;

type Props = { children: any };

config.autoAddCss = false;

const Base: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>free技術log</title>
        <meta
          name="description"
          content="フリーランスフロントエンドエンジニアのブログです。主に技術情報について投稿しています。"
        />
      </Helmet>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.contentsWrapper}>{children}</div>
        <SideMenu />
      </div>
      <footer className="footer">©free 技術log all rights reserved.</footer>
    </>
  );
};

export default Base;
