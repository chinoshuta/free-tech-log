import * as React from "react";
import BaseTemplate from "../../templates/BaseTemplate";
import Contents from "../../components/Contents";
import { graphql, Link, PageProps } from "gatsby";
import { DateTime } from "luxon";
import * as styles from "./index.module.scss";
import PageNation from "../../components/PageNation";

export const query = graphql`
  query PageBlogList($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      sort: { fields: publishDate, order: DESC }
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

const IndexPage: React.FC<PageProps<GatsbyTypes.PageBlogList>> = ({
  data,
  pageContext,
}) => {
  const context = pageContext as any;
  return (
    <BaseTemplate>
      <div className={styles.wrapper}>
        {data?.allContentfulBlogPost?.edges.map((n, i) => (
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
          totalPage={Math.ceil(
            Number(data.allContentfulBlogPost.totalCount) / 5
          )}
          current={+context.page}
        />
      </div>
    </BaseTemplate>
  );
};

export default IndexPage;
