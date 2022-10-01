import * as React from "react";
import BaseTemplate from "../templates/BaseTemplate";
import * as styles from "./about.module.scss";

const AboutPage: React.FC = () => {
  return (
    <BaseTemplate>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>このブログについて</h1>
        <p className={styles.text}>
          当ブログはフリーランスエンジニアの筆者が運営するブログです。
          <br />
          フリーランスとして活動していく中での出来事や、技術情報について主に投稿していきます。
          <br />
          記事やお仕事について何かありましたら以下までお問い合せください。
          <a href="mailto:free.tech.frontend@gmail.com">
            free.tech.frontend@gmail.com
          </a>
        </p>
        <h1 className={styles.title}>筆者について</h1>
        <p className={styles.text}>
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
        </p>
      </div>
    </BaseTemplate>
  );
};

export default AboutPage;
