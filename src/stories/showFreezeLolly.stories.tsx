import React from "react"
import ShowFreezeLolly from "./../templates/showLolly"
export default {
  title: "Freeze Lolly",
  component: ShowFreezeLolly,
  argTypes: {
    fillTop: { control: "color" },
    fillCenter: { control: "color" },
    fillBottom: { control: "color" },
  },
}

const Template = (args) => <ShowFreezeLolly {...args} />

export const Default = Template.bind({})

Default.args = {
  to: "Shahzad",
  from: "Ali",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  pathLink: "",

  fillTop: "#23d56d",
  fillCenter: "#46a8e9",
  fillBottom: "#7943de",
}
