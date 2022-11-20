const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions;
  const result = await graphql(
    `
      query {
        allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
          totalCount
          edges {
            node {
              id
            }
          }
        }
      }
    `
  );
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  const { edges, totalCount } = result.data.allContentfulBlogPost;
  edges?.forEach((n) => {
    createPage({
      path: `/post/${n.node.id}`,
      component: path.resolve("./src/templates/BlogPostTemplate/index.tsx"),
      context: {
        id: n.node.id,
      },
    });
  });

  [...Array(Math.ceil(Number(totalCount) / 2))].forEach((_, i) => {
    createPage({
      path: `/${i + 1}`,
      component: path.resolve("./src/templates/PageTemplate/index.tsx"),
      context: {
        skip: i * 2 - 1,
      },
    });
  });

  const Categoryresult = await graphql(
    `
      query {
        allContentfulCategory(sort: { order: ASC, fields: order }) {
          nodes {
            slug
          }
        }
      }
    `
  );
  if (Categoryresult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const { nodes } = Categoryresult.data.allContentfulCategory;
  nodes?.forEach((n) => {
    createPage({
      path: `/category/${n.slug}`,
      component: path.resolve(
        "./src/templates/CategoryBlogPostsTemplate/index.tsx"
      ),
      context: {
        slug: n.slug,
      },
    });
  });

  createRedirect({
    fromPath: "http://monumental-eclair-8a33ec.netlify.app/*",
    toPath: "https://free-tech.biz/:splat",
    isPermanent: true,
    force: true,
  });
  createRedirect({
    fromPath: "https://monumental-eclair-8a33ec.netlify.app/*",
    toPath: "https://free-tech.biz/:splat",
    isPermanent: true,
    force: true,
  });
};
