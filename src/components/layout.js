/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import { Global } from "@emotion/core"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Fragment>
      <Global
        styles={theme => ({
          body: {
            fontFamily: theme.fonts.body,
            fontSize: theme.fontSizes[2],
            a: {
              textDecoration: "none",
            },
            li: {
              listStyleType: "none",
            },
            "p, ul": {
              margin: 0,
              padding: 0,
            },
          },
        })}
      />
      <div
        sx={{
          padding: [3, 5, 5],
          maxWidth: "1280px",
          minHeight: "100vh",
          mx: "auto",
          display: "flex",
          flexFlow: "column nowrap",
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <main
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(128px,1fr))",
            marginTop: 4,
            width: "100%",
          }}
        >
          <div sx={{ gridColumn: ["1 / -1", "1 / -1", "3 / span 5"] }}>
            {children}
          </div>
        </main>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </div>
    </Fragment>
  )
}

export default Layout
