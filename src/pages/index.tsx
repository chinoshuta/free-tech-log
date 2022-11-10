import * as React from "react";
import BaseTemplate from "../templates/BaseTemplate";
import Contents from "../components/Contents";
import { graphql, PageProps } from "gatsby";
import { DateTime } from "luxon";

export const query = graphql`
  query BlogList {
    allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          publishDate
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

const IndexPage: React.FC<PageProps<GatsbyTypes.BlogListQuery>> = ({
  data,
}) => {
  return (
    <BaseTemplate>
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
    </BaseTemplate>
  );
};

export default IndexPage;
