// gatsby-config.js
const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const virtualLollyTemplate = path.resolve(`src/templates/showLolly.tsx`)
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const result = await graphql(`
    query {
      lolly {
        getAllLollies {
          path
          to
          from
          description
          fillTop
          fillCenter
          fillBottom
        }
      }
    }
  `)

  result.data.lolly.getAllLollies.forEach((obj) => {
    createPage({
      path: `/freeze-lolly/${obj.path}`,
      component: virtualLollyTemplate,
      context: {
        to: obj.to,
        from: obj.from,
        description: obj.description,
        pathLink: obj.path,
        fillTop: obj.fillTop,
        fillCenter: obj.fillCenter,
        fillBottom: obj.fillBottom,
      },
    })
  })
}
