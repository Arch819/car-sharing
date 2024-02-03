import styled from "styled-components";

export const LoadMoreBtn = styled("button")({
  display: "block",
  margin: "100px auto 0",
  padding: "12px 34px",
  background: "transparent",
  transition: "color var(----transition)",

  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "1.5",
  textDecorationLine: "underline",
  color: "var(--color-text-secondary)",

  "&:is(:hover,:focus)": {
    color: "var(--color-text-btn-hover)",
  },
});
