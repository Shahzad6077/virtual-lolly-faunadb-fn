import React, { FC } from "react"
import { ThemeProvider } from "theme-ui"
import Layout from "./components/layout"
import theme from "./gatsby-plugin-theme-ui/index"

const Index: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>{children}</Layout>
    </ThemeProvider>
  )
}

export default Index
