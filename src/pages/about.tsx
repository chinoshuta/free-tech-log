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
          Java、C#を用いた業務系システムの開発からReactを用いたフロントエンド開発まで経験しておりますが、
          <br />
          実際にユーザーの目に触れる部分をつくる手応えや、Reactを用いた開発体験の面白さから、今後はReactを用いたフロントエンド開発をメインに行なっていきたいと思っております。
        </p>
        <h1 className={styles.title}>経歴</h1>
        <p className={styles.text}>
          <ul>
            <li>
              SIerのパートナー企業で主にJava・C#を用いた公共系システムの開発を約３年半
            </li>
            <li>
              受託開発ベンチャー企業でWebアプリ、スマートフォンアプリの開発を約1年
            </li>
            <li>
              フリーランスエンジニアとしてReactを用いた案件に業務委託で参画（現在）
            </li>
          </ul>
        </p>
        <h1 className={styles.title}>経験技術</h1>
        <p className={styles.text}>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>SQL</li>
            <li>ReactNative</li>
            <li>PHP</li>
            <li>Java</li>
            <li>C#</li>
          </ul>
        </p>
      </div>
    </BaseTemplate>
  );
};

export default AboutPage;
