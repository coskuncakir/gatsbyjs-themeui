/** @jsx jsx */
import { jsx } from "theme-ui"

const Title = ({ children }) => (
  <h1
    sx={{ fontSize: [5, 6], fontWeight: "bold", marginTop: 0, marginBottom: 4 }}
  >
    {children}
  </h1>
)

export default Title
