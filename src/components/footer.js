/** @jsx jsx */
import { jsx } from "theme-ui"
import TextBody from "./text-body"

const Footer = ({ siteTitle }) => (
  <footer sx={{ marginTop: "auto" }}>
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(128px,1fr))",
        marginTop: 5,
        alignItems: "start",
      }}
    >
      <p sx={{ margin: 0, gridColumn: "1" }}>{siteTitle}</p>
      <ul
        sx={{
          marginTop: [4, 4, 0],
          alignContent: "start",
          gridColumn: ["1 / -1", "1 / -1", "3 / -1"],
          display: "flex",
          padding: 0,
          a: {
            marginRight: 4,
            color: "text",
            transition: ".3s ease-in-out",
            "&:hover": { color: "primary" },
          },
          "li:last-child": {
            display: ["none", "inherit", "inherit"],
            marginLeft: "auto",
            a: {
              marginRight: 0,
            },
          },
        }}
      >
        <li>
          <a
            href="https://twitter.com/coscakir"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://github.com/coscakir"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/coskuncakir"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li>
          © {new Date().getFullYear()}, Powered by 
          <a href="https://www.netlify.com" target="_blank" rel="noreferrer">
            Netlify
          </a>
          ,&nbsp;
          <a href="https://www.gatsbyjs.org" target="_blank" rel="noreferrer">
            Gatsby
          </a>
          &nbsp;& &nbsp;
          <a
            href="https://github.com/coscakir/personal"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
