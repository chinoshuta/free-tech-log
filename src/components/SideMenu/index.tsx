import { graphql, useStaticQuery } from "gatsby";
import { OutboundLink } from "gatsby-plugin-gtag";
import React from "react";
import * as styles from "./index.module.scss";

const SideMenu: React.FC = () => {
  const {
    allContentfulCategory,
    allContentfulBlogPost,
  }: GatsbyTypes.CategoryListQuery = useStaticQuery(graphql`
    query CategoryList {
      allContentfulCategory(sort: { order: ASC, fields: order }) {
        nodes {
          category
          slug
        }
      }
      allContentfulBlogPost {
        nodes {
          category {
            slug
          }
        }
      }
    }
  `);

  const getCategoryLength = (slug: string): number => {
    return (
      allContentfulBlogPost.nodes.filter(
        (b) => b.category?.filter((c) => c?.slug === slug).length
      ).length ?? 0
    );
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>プロフィール</p>
      <div className={styles.contents}>
        <img src="/images/profile.jpg" className={styles.profileImg} />
        <p className={styles.name}>shuta</p>
        <p>フリーランスのフロントエンドエンジニア</p>
        <p>
          React、React系のフレームワークを用いた開発をメインに行なっています
        </p>
        <div className={styles.iconWrapper}>
          <OutboundLink href="https://github.com/chinoshuta" target="_blank">
            <img src="/images/github-icon.png" />
          </OutboundLink>
        </div>
      </div>
      <p className={styles.title}>カテゴリ</p>
      <div className={styles.categoryWrapper}>
        {allContentfulCategory?.nodes.map((n) => (
          <OutboundLink
            className={styles.category}
            href={`/category/${n.slug}`}
            key={n.slug}
          >
            <>
              {n.category}
              {`(${getCategoryLength(n.slug!)})`}
            </>
          </OutboundLink>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
