export default {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    text: "#0c0c0d",
    background: "#F8F7FC",
    softBackground: "#fff",
    primary: "#6018F2",
    border: "rgba(96, 24, 242, 0.3)",
    modes: {
      dark: {
        text: "#ffffffe6",
        background: "#1C1B1F",
        primary: "#0cf",
        border: "rgba(96, 24, 242, 0.3)",
        softBackground: "rgba(255,255,255,0.09)",
      },
    },
  },
  fonts: {
    body:
      "inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
}
