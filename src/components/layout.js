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
          },
        })}
      />
      <div
        sx={{
          padding: ["15px", "45px"],
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
            marginTop: "45px",
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
