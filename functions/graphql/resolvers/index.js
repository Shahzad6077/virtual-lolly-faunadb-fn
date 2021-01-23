const faunadb = require("faunadb")
const shortid = require("shortid")
require("dotenv").config()
const query = faunadb.query

const client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET })

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello Shahzad from Apollo Server!",
    getLollyByPath: async (root, { path }, context) => {
      console.log(path)
      try {
        // const docRefs = query.Paginate(
        //   query.Match(query.Index("getLollyByPath"), path)
        // )

        // let results = await client.query(
        //   query.Map(docRefs, query.Lambda("ref", query.Get(query.Var("ref"))))
        // )
        let result = await client.query(
          query.Get(query.Match(query.Index("getLollyByPath"), path))
        )
        result = {
          id: result.ref.id,
          ts: `${result.ts}`,
          ...result.data,
        }

        if (result) {
          return result
        } else {
          throw new Error("Virtual Lolly not found.")
        }
      } catch (err) {
        return err
      }
    },
  },
  Mutation: {
    createVirtualLolly: async (root, { data }, context) => {
      try {
        const { to, from, description, fillTop, fillCenter, fillBottom } = data

        const path = shortid.generate()
        await client.query(
          query.Create("virtual-lollies", {
            data: {
              to,
              from,
              description,
              fillTop,
              fillCenter,
              fillBottom,
              path,
            },
          })
        )

        // return {
        //   id: result.ref.id,
        //   ts: `${result.ts}`,
        //   ...result.data,
        // }
        return path
      } catch (err) {
        return err
      }
    },
  },
}

module.exports = {
  resolvers,
}
