/** @jsx jsx */
import React, { FC } from "react"
import { LollyTemplate } from "./../components"
import { Styled, jsx } from "theme-ui"
import { Link } from "gatsby"

interface PageContext {
  to: string
  from: string
  description: string
}
type Props = {
  pageContext: PageContext
}

const Index: FC<Props> = ({ pageContext: { to, from, description } }) => {
  return (
    <div sx={{ display: "flex", justifyContent: "center" }}>
      <LollyTemplate />
      <div sx={{ ml: ["8px", "16px", "22px", "32px"] }}>
        <Styled.h4>Hey {to}</Styled.h4>
        <Styled.p sx={{ maxWidth: "520px" }}>{description}</Styled.p>
        <Styled.p sx={{ mt: "16px" }}>
          {from} made this virtual lollipop for you. You can{" "}
          <Styled.a as={Link} to="/page-2" sx={{ fontWeight: 600 }}>
            make your own
          </Styled.a>{" "}
          to send to a friend
        </Styled.p>
      </div>
    </div>
  )
}

export default Index
