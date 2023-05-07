const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions;
  const perPage = 5;
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

  [...Array(Math.ceil(Number(totalCount) / perPage))].forEach((_, i) => {
    createPage({
      path: `/${i + 1}`,
      component: path.resolve("./src/templates/PageTemplate/index.tsx"),
      context: {
        skip: i * perPage,
        limit: perPage,
        page: i + 1,
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
  nodes?.forEach(async (n) => {
    createPage({
      path: `/category/${n.slug}`,
      component: path.resolve(
        "./src/templates/CategoryBlogPostsTemplate/index.tsx"
      ),
      context: {
        slug: n.slug,
        skip: 0,
        limit: perPage,
        page: 1,
      },
    });
    // const CategoryPostResult = await graphql(
    //   `
    //     query {
    //       allContentfulBlogPost(
    //         filter:
    //           { category:
    //             { elemMatch:
    //               { slug:
    //                 { eq: ${n.slug}}
    //               }
    //             }
    //           }
    //         )
    //         { totalCount }
    //       }
    //   `
    // );
    // const categoryPostTotalCount =
    //   CategoryPostResult?.data?.allContentfulCategory?.totalCount ?? 0;
    // if (categoryPostTotalCount > perPage) {
    //   [...Array(Math.ceil(Number(categoryPostTotalCount) / perPage))].forEach(
    //     (_, i) => {
    //       createPage({
    //         path: `/${n.slug}/${i + 1}`,
    //         component: path.resolve(
    //           "./src/templates/CategoryBlogPostsTemplate/index.tsx"
    //         ),
    //         context: {
    //           skip: i * perPage,
    //           limit: perPage,
    //           page: i + 1,
    //         },
    //       });
    //     }
    //   );
    // }
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
