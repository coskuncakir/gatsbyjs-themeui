/** @jsx jsx */
import { jsx, Text, Link } from "theme-ui"
import Layout from "../components/layout"
import Reading from "../components/reading"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Reading" />
    <Text variant="headline" as="h1">
      Reading
    </Text>
    <Text variant="caption" as="p" sx={{ marginBottom: 4 }}>
      The following books come dynamically from my{" "}
      <Link
        variant="body"
        href="https://www.goodreads.com/user/show/61767082-coskun-cakir"
        target="_blank"
        rel="noopener noreferrer"
      >
        goodreads
      </Link>{" "}
      profile. This section will then be edited by adding pagination to show my
      favorite shelf.
    </Text>
    <Reading />
  </Layout>
)

export default IndexPage
