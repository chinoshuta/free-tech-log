import { graphql, Link, PageProps } from "gatsby";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import * as styles from "./index.module.scss";
import BaseTemplate from "../BaseTemplate";
import "prismjs/themes/prism.css";
import { DateTime } from "luxon";

export const query = graphql`
  query BlogPost($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      category {
        category
        slug
      }
      publishDate
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

const BlogPostTemplate: React.FC<PageProps<GatsbyTypes.BlogPostQuery>> = ({
  data,
}) => {
  return (
    <BaseTemplate>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{data.contentfulBlogPost?.title}</h1>
        <div className={styles.note}>
          <div>
            <FontAwesomeIcon className={styles.icon} icon={faFolderOpen} />
            {data.contentfulBlogPost?.category?.map((n, i) => {
              return (
                <Link to={`/category/${n?.slug}`} className={styles.category}>
                  {n?.category}
                </Link>
              );
            })}
          </div>
          <div>
            {DateTime.fromJSDate(
              new Date(data.contentfulBlogPost?.publishDate || "")
            ).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}
          </div>
        </div>
        <p
          className={styles.text}
          dangerouslySetInnerHTML={{
            __html:
              data.contentfulBlogPost?.content?.childMarkdownRemark?.html ?? "",
          }}
        />
      </div>
    </BaseTemplate>
  );
};

export default BlogPostTemplate;
