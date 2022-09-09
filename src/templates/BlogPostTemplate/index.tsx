import { graphql, PageProps } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faFolderOpen } from "@fortawesome/free-regular-svg-icons";

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
`;

const Text = styled.p`
  font-size: 14px;
  color: #3e3e3e;
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
      <Wrapper>
        <Title>{data.contentfulBlogPost?.title}</Title>
        <Note>
          <div>
            <Icon icon={faFolderOpen} />
            {data.contentfulBlogPost?.category?.map((n, i) => {
              return i > 0 ? `,${n?.category}` : n?.category;
            })}
          </div>
          <div>
            <Icon icon={faClock} />
            {data.contentfulBlogPost?.publishDate}
          </div>
        </Note>
        <Text
          dangerouslySetInnerHTML={{
            __html:
              data.contentfulBlogPost?.content?.childMarkdownRemark?.html ?? "",
          }}
        />
      </Wrapper>
    </BaseTemplate>
  );
};

export default BlogPostTemplate;
