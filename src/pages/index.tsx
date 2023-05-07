import * as React from "react";
import BaseTemplate from "../templates/BaseTemplate";
import Contents from "../components/Contents";
import { graphql, PageProps } from "gatsby";
import { DateTime } from "luxon";
import * as styles from "./index.module.scss";
import PageNation from "../components/PageNation";

export const query = graphql`
  query BlogList {
    allContentfulBlogPost(
      sort: { fields: publishDate, order: DESC }
      limit: 5
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

const IndexPage: React.FC<PageProps<GatsbyTypes.BlogListQuery>> = ({
  data,
}) => {
  return (
    <BaseTemplate>
      <div className={styles.wrapper}>
        {data.allContentfulBlogPost.edges.map((n, i) => (
          <Contents
            title={n.node.title ?? ""}
            date={DateTime.fromJSDate(
              new Date(n.node.publishDate || "")
            ).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}
            content={n.node.content?.childMarkdownRemark?.excerpt ?? ""}
            id={n.node.id ?? ""}
            category={n.node.category ?? []}
            key={n.node.id ?? i}
          />
        ))}
        <PageNation
          current={1}
          totalPage={Math.ceil(
            Number(data.allContentfulBlogPost.totalCount) / 5
          )}
        />
      </div>
    </BaseTemplate>
  );
};

export default IndexPage;
