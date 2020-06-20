/** @jsx jsx */
import { jsx, IconButton, useColorMode } from "theme-ui"
import { Link } from "gatsby"
import MenuItems from "./menu-items"
import { Light, Dark } from "../icons"

const Menu = ({ ...props }) => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <ul
      sx={{
        display: "flex",
        margin: 0,
        marginTop: ["0px", "15px", "0px"],
        flexFlow: "row wrap",
        paddingLeft: 0,
        alignContent: "start",
        fontSize: 2,
        fontWeight: "heading",
        lineHeight: "body",
        li: {
          paddingRight: "30px",
          marginBottom: "15px",
          a: {
            color: "text",
            textDecoration: "none",
            paddingBottom: "5px",
            gridColumn: ["1 / span 1", "1 / span 1", "1 / span 3"],
            borderBottom: "1px solid rgba(0,0,0,0)",
            transition: ".3s ease-in-out",
            "&:hover": { color: "primary" },
            "&.active": {
              color: "primary",
              borderBottom: `1px solid`,
              borderColor: "primary",
            },
          },
          "&:last-child": {
            paddingRight: 0,
            marginLeft: "auto",
            button: {
              cursor: "pointer",
            },
            svg: {
              fontSize: 4,
            },
          },
        },
      }}
      {...props}
    >
      {MenuItems.map(menu => (
        <li key={menu.url}>
          <Link to={menu.url} activeClassName="active">
            {menu.title}
          </Link>
        </li>
      ))}
      <li>
        <IconButton
          onClick={e => {
            setColorMode(colorMode === "default" ? "dark" : "default")
          }}
          aria-label="Toggle dark mode"
        >
          {colorMode === "dark" ? <Dark /> : <Light />}
        </IconButton>
      </li>
    </ul>
  )
}

export default Menu
