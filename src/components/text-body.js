/** @jsx jsx */
import { jsx } from "theme-ui"

const TextBody = ({ children }) => (
  <p
    sx={{
      fontSize: 3,
      lineHeight: "body",
      fontWeight: "body",
      marginTop: 0,
      marginBottom: 2,
      a: {
        color: "primary",
        fontWeight: "500",
        borderBottom: "1px solid",
        borderColor: "border",
        transition: "all 0.3s ease-in-out 0s",
        "&:hover": { borderColor: "primary" },
      },
    }}
  >
    {children}
  </p>
)

export default TextBody
