/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import React, { Fragment } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const SecondPage = () => (
  <Fragment>
    <SEO title="Page two" />
    <Styled.h1>Hi from the second page</Styled.h1>
    <Styled.p>Welcome to page 2</Styled.p>
    <Styled.a as={Link} to="/">
      Go back to the homepage
    </Styled.a>
  </Fragment>
)

export default SecondPage
