import styled from "styled-components";

export const ModalCloseStyle = styled("button")({
  position: "absolute",
  top: "16px",
  right: "16px",
  background: "transparent",
  borderColor: "transparent",

  "& svg": {
    stroke: "var(--stroke-close)",
  },
});
