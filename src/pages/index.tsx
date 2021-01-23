/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import { useQuery, gql } from "@apollo/client"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { LollyMaker } from "../components"

const APOLLO_QUERY = gql`
  query {
    hello
  }
`

const IndexPage = (props) => {
  const { data, loading, error } = useQuery(APOLLO_QUERY)
  return (
    <Layout>
      <SEO title="Home" />
      <Styled.h1>
        {data ? data.hello : loading ? "Loading..." : error && error.message}
      </Styled.h1>
      <LollyMaker />
    </Layout>
  )
}

export default IndexPage
