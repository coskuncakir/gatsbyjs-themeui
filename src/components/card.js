/** @jsx jsx */
import { jsx } from "theme-ui"
import { RightArrow } from "./icons"

const Card = ({
  title,
  url,
  target = "_blank",
  author,
  tag,
  img,
  children,
  ...props
}) => (
  <div
    sx={{
      boxShadow: "0px 4px 8px rgba(12,12,13,.05)",
      padding: 3,
      transition: ".25s ease-in-out",
      marginBottom: 3,
      border: "1px solid rgba(12, 12, 13, 0.1)",
      alignItems: "center",
      borderRadius: "4px",
      backgroundColor: "softBackground",

      "&:hover": {
        boxShadow: "0px 8px 12px rgba(12,12,13,.15)",

        h3: {
          color: "primary",
        },
      },
    }}
    {...props}
  >
    <a
      sx={{
        color: "text",
        display: "flex",
        flexFlow: ["row wrap", "row nowrap", "row nowrap"],
      }}
      href={url}
      target={target}
      rel="noreferrer"
    >
      {img && (
        <div
          sx={{
            marginBottom: [4, 2, 2],
            marginRight: [0, 4, 4],
            marginTop: [0, 2, 2],
            width: ["100%", "auto", "auto"],
            textAlign: ["center", "left", "left"],
          }}
        >
          <img src={img} alt={title} />
        </div>
      )}
      <ul>
        <li>
          <h3
            sx={{
              fontSize: 3,
              fontWeight: "heading",
              margin: 0,
              lineHeight: "body",
              transition: ".25s ease-in-out",
            }}
          >
            {title}
          </h3>
          <p sx={{ fontSize: 1, marginTop: 1, marginBottom: 3 }}>by {author}</p>
          <p sx={{ lineHeight: "body", color: "textMuted" }}>
            {truncate(stripHtml(children), 200)}
          </p>
        </li>
        <li
          sx={{
            color: "primary",
            display: "flex",
            alignItems: "center",
            marginTop: 2,
            fontWeight: "heading",
          }}
        >
          <p sx={{ marginRight: 2, fontSize: 1 }}>Check it out</p>
          <RightArrow />
        </li>
      </ul>
    </a>
  </div>
)

function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + "..." : str
}

function stripHtml(html) {
  var tmp = document.createElement("p")
  tmp.innerHTML = html
  return tmp.textContent || tmp.innerText || ""
}

export default Card
