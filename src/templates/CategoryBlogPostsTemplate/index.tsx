import { graphql, PageProps } from "gatsby";
import { DateTime } from "luxon";
import * as React from "react";
import Contents from "../../components/Contents";
import BaseTemplate from "../BaseTemplate";
import * as styles from "./index.module.scss";

export const query = graphql`
  query CategoryBlogPost($slug: String!) {
    allContentfulBlogPost(
      sort: { fields: publishDate, order: DESC }
      filter: { category: { elemMatch: { slug: { eq: $slug } } } }
    ) {
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
> = ({ data }) => {
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
      </div>
    </BaseTemplate>
  );
};

export default BlogPostTemplate;
