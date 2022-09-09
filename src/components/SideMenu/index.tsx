import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 320px;
  height: auto;
  padding: 40px;
  background-color: white;
  @media screen and (max-width: 420px) {
    margin: 30px auto;
  }
`;

const Title = styled.p`
  font-size: 18px;
  border-left: 4px solid #254678;
  padding-left: 8px;
`;

const Contents = styled.div`
  font-size: 13px;
  padding: 12px 0;
`;

const Name = styled.p`
  font-size: 16px;
  text-align: center;
  margin: 12px 0;
`;

const ProfileImg = styled.img.attrs({ src: "/images/profile.jpg" })`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  margin: 0 auto;
`;
const IconWrapper = styled.div`
  margin: 12px 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  img {
    width: 20px;
  }
`;
const CategoryWrap = styled.div`
  margin: 12px 0;
`;
const Category = styled(Link)`
  display: block;
  font-size: 14px;
  line-height: 2em;
`;

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
    <Wrapper>
      <Title>プロフィール</Title>
      <Contents>
        <ProfileImg />
        <Name>shuta</Name>
        <p>フリーランスのフロントエンドエンジニア</p>
        <p>
          React、React系のフレームワークを用いた開発をメインに行なっています
        </p>
        <IconWrapper>
          <a href="https://github.com/chinoshuta" target="_blank">
            <img src="/images/github-icon.png" />
          </a>
        </IconWrapper>
      </Contents>
      <Title>カテゴリ</Title>
      <CategoryWrap>
        {allContentfulCategory?.nodes.map((n) => (
          <Category to={`/category/${n.slug}`}>
            <>
              {n.category}
              {`(${getCategoryLength(n.slug)})`}
            </>
          </Category>
        ))}
      </CategoryWrap>
    </Wrapper>
  );
};

export default SideMenu;
