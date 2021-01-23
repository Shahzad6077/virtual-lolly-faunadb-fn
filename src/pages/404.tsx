/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import React, { Fragment } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <Fragment>
    <SEO title="404: Not found" />
    <Styled.h1>NOT FOUND</Styled.h1>
    <Styled.p>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Styled.p>
    <Styled.a as={Link} to="/">
      Go back to the homepage
    </Styled.a>
  </Fragment>
)

export default NotFoundPage
