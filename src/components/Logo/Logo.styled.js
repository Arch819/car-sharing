import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoStyle = styled(Link)({
  display: "flex",
  alignItems: "center",
  padding: "4px 0",

  fontSize: "24px",
  fontWeight: 600,
  color: "inherit",
});

export const LogoFirstWordStyle = styled("span")({
  color: "var(--color-text-secondary)",
});
