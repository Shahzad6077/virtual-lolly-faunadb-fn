/** @jsx jsx */
import React, { FC } from "react"
import { Label, Input, Button, Textarea, jsx, Box } from "theme-ui"
import { SubmitHandler } from "react-hook-form"
import { FormData } from "./lolly.interface"
type Props = {
  ref: any
}
const colorSx = {
  width: 50,
  height: 50,
  borderRadius: "50px",
  overflow: "hidden",
  mb: 10,
}
const Index: FC<Props> = React.forwardRef((props, register) => {
  return (
    <Box sx={{ display: "flex" }}>
      <div
        sx={{
          p: 50,

          "& [type='color']": {
            border: 0,
            padding: 0,
            width: "200%",
            height: "200%",
            cursor: "pointer",
            transform: "translate(-25%, -25%)",
          },
        }}
      >
        <div sx={colorSx}>
          <Input ref={register} type="color" id="flavourTop" name="fillTop" />
        </div>
        <div sx={colorSx}>
          <Input
            ref={register}
            type="color"
            id="flavourMiddle"
            name="fillCenter"
          />
        </div>
        <div sx={colorSx}>
          <Input
            ref={register}
            type="color"
            id="flavourBottom"
            name="fillBottom"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="recipientName">To</Label>
        <Input ref={register} type="text" id="recipientName" name="to" />

        <Label htmlFor="message">Say something nice</Label>
        <Textarea
          ref={register}
          name="message"
          id="message"
          cols={30}
          rows={10}
        ></Textarea>

        <Label htmlFor="sendersName">From</Label>
        <Input ref={register} type="text" id="sendersName" name="from" />

        <Button type="submit" sx={{ mt: 10 }}>
          Freeze this lolly and get a link
        </Button>
      </div>
    </Box>
  )
})

export default Index
