/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import React, { Fragment } from "react"
import { useQuery, gql } from "@apollo/client"

import SEO from "../components/seo"
import { LollyMaker } from "../components"
import Show from "./../templates/showLolly"

const APOLLO_QUERY = gql`
  query {
    hello
  }
`
const a = ` Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text ever
since the 1500s, when an unknown printer took a galley of type and
scrambled it to make a type specimen book. It has survived not only
five centuries, but also the leap into electronic typesetting,
remaining essentially unchanged. It was popularised in the 1960s with
the release of Letraset sheets containing Lorem Ipsum passages, and
more recently with desktop publishing software like Aldus PageMaker
including versions of Lorem Ipsum.`
const IndexPage = (props) => {
  const { data, loading, error } = useQuery(APOLLO_QUERY)
  return (
    <Fragment>
      <SEO title="Home" />
      <Styled.h1>
        {data ? data.hello : loading ? "Loading..." : error && error.message}
      </Styled.h1>
      <LollyMaker />
    </Fragment>
  )
}

export default IndexPage
