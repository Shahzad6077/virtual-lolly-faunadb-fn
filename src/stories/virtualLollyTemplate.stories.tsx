import React from "react"
import { LollyTemplate } from "./../components"
export default {
  title: "Virtual Lolly Tempalte",
  component: LollyTemplate,
  argTypes: {
    fillTop: { control: "color" },
    fillCenter: { control: "color" },
    fillBottom: { control: "color" },
  },
}

const Template = (args) => <LollyTemplate {...args} />

export const Default = Template.bind({})

Default.args = {
  fillTop: "#d52358",
  fillCenter: "#e95946",
  fillBottom: "#deaa43",
}
