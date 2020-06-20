import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"
import TextBody from "../components/text-body"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Title>Hello, I'm Coskun</Title>
    <TextBody>
      I’m a front-end developer,
      <br />
      I have a special passion for JavaScript and its frameworks.
      <br />
      I'm on{" "}
      <a href="https://twitter.com/coscakir" target="_blank" rel="noreferrer">
        twitter
      </a>{" "}
      and{" "}
      <a href="https://github.com/coscakir" target="_blank" rel="noreferrer">
        github
      </a>
      . If you want to get in touch, feel free to{" "}
      <a href="mailto:hello@coskuncakir.com">email</a> me!
    </TextBody>
  </Layout>
)

export default IndexPage
