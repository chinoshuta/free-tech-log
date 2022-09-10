import * as React from "react";
import Header from "../../components/Header";
import styled from "styled-components";
import "modern-css-reset";
import SideMenu from "../../components/SideMenu";
import { Helmet } from "react-helmet";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

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
      <BodyWrapper>
        <ContentsWrapper>{children}</ContentsWrapper>
        <SideMenu />
      </BodyWrapper>
      <Footer>©free 技術log all rights reserved.</Footer>
    </>
  );
};

export default Base;
