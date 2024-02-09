import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainerStyle = styled("div")({
  textAlign: "center",
});
export const HomeTitleStyle = styled("h1")({
  width: "100%",
  borderRadius: "24px",
  textShadow: "2px 2px 2px #121417",
  fontSize: "74px",
  fontWeight: 600,
  lineHeight: "1.3",
  color: "var(--color-text-home)",
  marginBottom: "60px",
});

export const SignUpInBtnBoxStyle = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
});

export const HomeBtnStyle = styled(Link)({
  padding: "18px 38px",
  background: "var(--bg-backdrop)",
  border: "var(--border-btn)",
  borderRadius: "14px",

  fontSize: "32px",
  fontWeight: "600",
  lineHeight: "1.3",
  color: "var(--color-text-btn)",
  "&:hover": {
    borderColor: "#3470FF",
  },
});
