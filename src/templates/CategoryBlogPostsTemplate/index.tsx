import { graphql, PageProps } from "gatsby";
import { DateTime } from "luxon";
import * as React from "react";
import Contents from "../../components/Contents";
import PageNation from "../../components/PageNation";
import BaseTemplate from "../BaseTemplate";
import * as styles from "./index.module.scss";

export const query = graphql`
  query CategoryBlogPost($slug: String!, $skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      sort: { fields: publishDate, order: DESC }
      filter: { category: { elemMatch: { slug: { eq: $slug } } } }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          publishDate
          title
          id
          category {
            category
            slug
          }
          content {
            childMarkdownRemark {
              excerpt(pruneLength: 200)
            }
          }
        }
      }
    }
  }
`;

const BlogPostTemplate: React.FC<
  PageProps<GatsbyTypes.CategoryBlogPostQuery>
> = ({ data, pageContext }) => {
  const context = pageContext as any;
  return (
    <BaseTemplate>
      <div className={styles.wrapper}>
        {data.allContentfulBlogPost.edges.map((n) => (
          <Contents
            title={n.node.title ?? ""}
            date={DateTime.fromJSDate(
              new Date(n.node.publishDate || "")
            ).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}
            content={n.node.content?.childMarkdownRemark?.excerpt ?? ""}
            id={n.node.id ?? ""}
            category={n.node.category ?? []}
          />
        ))}
        <PageNation
          totalPage={Math.ceil(
            Number(data.allContentfulBlogPost.totalCount) / 5
          )}
          current={+context.page}
        />
      </div>
    </BaseTemplate>
  );
};

export default BlogPostTemplate;
