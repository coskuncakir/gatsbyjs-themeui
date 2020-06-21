export default {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 45, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64],
  colors: {
    primary: "#6018F2",
    background: "#F8F7FC",
    text: "#0c0c0d",
    textMuted: "rgba(12, 12, 13, 0.65)",
    softBackground: "#fff",
    border: "rgba(96, 24, 242, 0.3)",
    modes: {
      dark: {
        primary: "#0cf",
        background: "#1C1B1F",
        text: "#ffffffe6",
        textMuted: "rgba(255, 255, 255, 0.65)",
        softBackground: "rgba(255,255,255,0.09)",
        border: "rgba(178, 102, 255, 0.5)",
      },
    },
  },
  fonts: {
    body:
      "inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
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
  text: {
    body: {
      fontFamily: "body",
      fontSize: "2",
      fontWeight: "regular",
      lineHeight: "2",
      letterSpacing: "1",
    },
    headline: {
      color: "text",
      fontFamily: "heading",
      fontSize: 7,
      fontWeight: "bold",
      lineHeight: "heading",
      marginBottom: 3,
    },
    caps: {
      fontFamily: "body",
      fontSize: "1",
      fontWeight: "bold",
      lineHeight: "body",
      letterSpacing: "2",
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: "body",
      color: "textMuted",
      fontSize: "3",
      fontWeight: "body",
      lineHeight: "body",
    },
    sectionHeader: {
      fontFamily: "body",
      fontSize: "4",
      fontWeight: "bold",
      lineHeight: "0",
      letterSpacing: "0",
    },
  },
  links: {
    body: {
      color: "primary",
      fontWeight: "500",
      borderBottom: "1px solid",
      borderColor: "border",
      transition: "all 0.3s ease-in-out 0s",
      "&:hover": { borderColor: "primary" },
    },
  },
}
