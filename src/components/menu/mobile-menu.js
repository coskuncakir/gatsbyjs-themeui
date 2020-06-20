/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import MenuItems from "./menu-items"

const MobileMenu = ({ isVisible, ...props }) => {
  return (
    <ul
      className={isVisible ? "open" : "close"}
      {...props}
      sx={{
        "&.open": {
          opacity: "0.95",
          visibility: "visible",
          transition: "all .2s ease-in-out",
        },
        "&.close": {
          opacity: "0",
          visibility: "hidden",
          transition: "all .2s ease-in-out",
        },
        backgroundColor: "background",
        opacity: "0.95",
        position: "absolute",
        height: "100vh",
        width: "100%",
        top: 0,
        left: 0,
        paddingLeft: "45px",
        zIndex: 10,
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        li: {
          fontSize: 5,
          fontWeight: "bold",
          marginBottom: "10px",
          lineHeight: "body",
          a: {
            color: "text",
            "&:hover, &.active": {
              color: "primary",
            },
          },
        },
      }}
    >
      {MenuItems.map(menu => (
        <li key={menu.url}>
          <Link to={menu.url} activeClassName="active">
            {menu.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MobileMenu
