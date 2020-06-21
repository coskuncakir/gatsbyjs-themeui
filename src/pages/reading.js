import React from "react"

import Layout from "../components/layout"
import Reading from "../components/reading"
import SEO from "../components/seo"
import Title from "../components/title"

const IndexPage = () => (
  <Layout>
    <SEO title="Reading" />
    <Title>Reading</Title>
    <Reading />
  </Layout>
)

export default IndexPage
