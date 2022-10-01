import { graphql, PageProps } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import * as styles from "./index.module.scss";

import BaseTemplate from "../BaseTemplate";

const Wrapper = styled.div`
  width: 100%;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2em;
  text-transform: none;
  padding-bottom: 12px;
  border-bottom: 1px solid #254678;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 1.8em;
  & p {
    white-space: pre-wrap;
  }
  & blockquote {
    padding: 0 1em;
    border-left: 0.25em solid #d0d7de;
    line-height: 1.4em;
  }
`;

const Note = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin: 14px 0;
  color: #3e3e3e;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 6px;
`;

export const query = graphql`
  query BlogPost($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      category {
        category
      }
      publishDate(formatString: "YYYY年MM月DD日")
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
              return i > 0 ? `,${n?.category}` : n?.category;
            })}
          </div>
          <div>
            <FontAwesomeIcon className={styles.icon} icon={faClock} />
            {data.contentfulBlogPost?.publishDate}
          </div>
        </div>
        <Text
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
