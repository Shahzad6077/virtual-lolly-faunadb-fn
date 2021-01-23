/** @jsx jsx */
import React, { FC } from "react"
import { Label, Input, Button, Textarea, jsx, Box, Spinner } from "theme-ui"
type Props = {
  ref: any
  loading: boolean
}
const colorSx = {
  width: 50,
  height: 50,
  borderRadius: "50px",
  overflow: "hidden",
  mb: [0, 10],
}
const Index: FC<Props> = React.forwardRef(({ loading }, register) => {
  return (
    <Box sx={{ display: "flex", flexDirection: ["column", "row"], ml: [22] }}>
      <div
        sx={{
          display: "flex",
          flexDirection: ["row", "column"],
          justifyContent: ["space-around", "unset"],
          p: [10, 20, 40],
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
      <div
        sx={{
          fontSize: 18,
        }}
      >
        <Label htmlFor="recipientName">To</Label>
        <Input ref={register} type="text" id="recipientName" name="to" />

        <Label htmlFor="message">Say something nice</Label>
        <Textarea
          ref={register}
          name="description"
          id="message"
          cols={30}
          rows={10}
        ></Textarea>

        <Label htmlFor="sendersName">From</Label>
        <Input ref={register} type="text" id="sendersName" name="from" />

        <div sx={{ display: "flex", justifyContent: "center" }}>
          {loading ? (
            <Spinner />
          ) : (
            <Button type="submit" sx={{ mt: 10 }}>
              Freeze this lolly and get a link
            </Button>
          )}
        </div>
      </div>
    </Box>
  )
})

export default Index
