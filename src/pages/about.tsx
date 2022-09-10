import * as React from "react";
import styled from "styled-components";
import BaseTemplate from "../templates/BaseTemplate";

const Wrapper = styled.div`
  width: 100%;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2em;
  text-transform: none;
  padding-bottom: 12px;
  border-bottom: 1px solid #254678;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 1.8em;
  margin: 12px 0 40px;
`;

const AboutPage: React.FC = () => {
  return (
    <BaseTemplate>
      <Wrapper>
        <Title>このブログについて</Title>
        <Text>
          当ブログはフリーランスエンジニアの筆者が運営するブログです。
          <br />
          フリーランスとして活動していく中での出来事や、技術情報について主に投稿していきます。
          <br />
          記事やお仕事について何かありましたら以下までお問い合せください。
          <a href="mailto:free.tech.frontend@gmail.com">
            free.tech.frontend@gmail.com
          </a>
        </Text>
        <Title>筆者について</Title>
        <Text>
          関東在住の30代男性です。
          <br />
          情報系の学部を卒業後、新卒でIT企業に入社し、これまで開発をメインに仕事を続けてきました。
          <br />
          以下がおおまかな経歴です。
          <ul>
            <li>
              SIerのパートナー企業で主にJava・C#を用いた公共系システムの開発に３年半ほど携わる
            </li>
            <li>
              受託開発企業でWebアプリ、スマートフォンアプリの開発に1年ほど携わる
            </li>
            <li>
              フリーランスエンジニアとしてReactを用いた案件に業務委託で参画（現在）
            </li>
          </ul>
          今後もReact用いたフロントエンド開発をメインに行なっていきたく、
          <br />
          またGoを用いたバックエンド開発もできるようになりたいと思い勉強中です。
        </Text>
      </Wrapper>
    </BaseTemplate>
  );
};

export default AboutPage;
