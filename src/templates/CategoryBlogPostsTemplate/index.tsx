import { graphql, PageProps } from "gatsby";
import * as React from "react";
import Contents from "../../components/Contents";
import BaseTemplate from "../BaseTemplate";

export const query = graphql`
  query CategoryBlogPost($slug: String!) {
    allContentfulBlogPost(
      sort: { fields: publishDate, order: DESC }
      filter: { category: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      edges {
        node {
          publishDate(formatString: "YYYY年MM月DD日")
          title
          id
          category {
            category
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
      {data.allContentfulBlogPost.edges.map((n) => (
        <Contents
          title={n.node.title ?? ""}
          date={n.node.publishDate ?? ""}
          content={n.node.content?.childMarkdownRemark?.excerpt ?? ""}
          id={n.node.id ?? ""}
          category={n.node.category ?? []}
        />
      ))}
    </BaseTemplate>
  );
};

export default BlogPostTemplate;
