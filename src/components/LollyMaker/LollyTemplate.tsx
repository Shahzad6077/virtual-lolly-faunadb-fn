/** @jsx jsx */
import React, { FC } from "react"
import { jsx } from "theme-ui"
import Lollyillustration from "../../assets/lolly.svg"

type Props = {
  fillTop?: string
  fillCenter?: string
  fillBottom?: string
}

const LollyTemplate: FC<Props> = ({
  fillTop = "#d52358",
  fillCenter = "#e95946",
  fillBottom = "#deaa43",
}) => {
  return (
    <div
      className="LollyTemplate"
      sx={{
        "& .lollyTop": {
          fill: fillTop,
        },
        "& .lollyMiddle": {
          fill: fillCenter,
        },
        "& .lollyBottom": {
          fill: fillBottom,
        },
      }}
    >
      <Lollyillustration />
    </div>
  )
}
export default LollyTemplate
