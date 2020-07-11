import { css } from "styled-components";

const theme = {
  COLOR: {
    PRIMARY_COLOR: "#00d4ff",
    SECONDARY_COLOR: "#f8e3f3",
    BLACK: "#000",
    WHITE: "#fff",
    GRAY: "#d9cece",
    ERROR: "#f64747",
    DARK_GREY: "#8b8b8b"
  },
  WRAPPER: {
    WIDTH: "95%",
    MAX_WIDTH: "1250px",
    COLOR: "#e2f5e7"
  },
  SNIPPETS: {
    BOX_SHADOW: css`
      box-shadow: 4px 8px 15px 0 rgba(0, 0, 0, 0.14);
    `,
    HEADING: css`
      font-family: "Roboto", sans-serif;
      font-size: 35px;
    `
  }
};

export default function configureTheme() {
  return theme;
}
