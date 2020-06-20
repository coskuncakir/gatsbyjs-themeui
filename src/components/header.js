/** @jsx jsx */
import { Link } from "gatsby"
import { useState } from "react"
import { jsx, Grid, IconButton, useColorMode } from "theme-ui"
import { MobileMenu, Menu } from "./menu"
import { Light, Dark, Close, Menu as MenuIcon } from "./icons"

const Header = ({ siteTitle }) => {
  const [colorMode, setColorMode] = useColorMode()
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <Grid
      gap={0}
      columns={["repeat(auto-fill,minmax(128px,1fr))"]}
      sx={{ alignItems: ["center", "start", "start"] }}
    >
      <Link
        to="/"
        sx={{
          paddingTop: ["0px", "0px", "3px"],
          color: "text",
          gridColumn: "1",
          transition: "all 0.3s ease-in-out 0s;",
          "&:hover": { color: "primary" },
        }}
      >
        <h3 sx={{ margin: 0, fontSize: 2, fontWeight: "heading" }}>
          {siteTitle}
        </h3>
      </Link>
      <div
        sx={{
          display: ["block", "none"],
          gridColumn: "-2",
          justifySelf: "end",
          zIndex: 10,
          button: {
            width: "40px",
            height: "40px",
            cursor: "pointer",
            fontSize: 5,
          },
        }}
      >
        <div sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={e => {
              setColorMode(colorMode === "default" ? "dark" : "default")
            }}
            aria-label="Toggle dark mode"
            sx={{
              marginRight: "30px",
              color: "primary",
            }}
          >
            {colorMode === "dark" ? <Dark /> : <Light />}
          </IconButton>
          {mobileMenu ? (
            <IconButton
              onClick={e => {
                setMobileMenu(false)
              }}
              aria-label="Close Menu"
              sx={{
                position: "relative",
                zIndex: 15,
              }}
            >
              <Close />
            </IconButton>
          ) : (
            <IconButton
              aria-label="Toggle Menu"
              onClick={e => {
                setMobileMenu(!mobileMenu)
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </div>
        <MobileMenu isVisible={mobileMenu} />
      </div>

      <div
        sx={{
          display: ["none", "block"],
          gridColumn: ["1 / -1", "1 / -1", "3 / -1"],
          marginLeft: 0,
        }}
      >
        <Menu />
      </div>
    </Grid>
  )
}

export default Header
