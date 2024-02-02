import styled from "styled-components";

export const ItemTitleStyle = styled("h3")({
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "1.5",
  color: "var(--color-text-primary)",
  ".modal &": {
    fontSize: "18px",
    lineHeight: "1.33",
  },
});
export const ItemModelTextStyle = styled("span")({
  color: "var(--color-text-secondary)",
});
