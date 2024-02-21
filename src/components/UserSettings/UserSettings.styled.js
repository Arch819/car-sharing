import styled from "styled-components";

export const SettingsBoxStyle = styled("div")({
  position: "relative",
});

export const SettingsBtnStyle = styled("button")({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  padding: "8px 12px 8px 12px",
  borderRadius: "30px",
  background: "transparent",
  boxShadow: "inset 0 0 10px 1px #0f0f0f",

  fontSize: "22px",
  fontWeight: "500",

  color: "var(--color-text-primary)",
});

export const SettingMenuStyle = {
  marginTop: "55px",

  "& .MuiMenuList-root": {
    background: "var(--bg-modal)",
    padding: "12px 0",
    borderRadius: "12px",
  },
};

export const NavLinkStyle = {
  minWidth: 100,
  padding: "10px 0",
  color: "#aeaeae",
  textDecoration: "none",
  textTransform: "uppercase",

  "&:is(:hover,:focus),&.active": {
    color: "#f1f1f1",
  },
};

export const LogOutStyle = styled("button")({
  width: "100%",
  display: "flex",

  alignItems: "center",
  gap: "10px",
  padding: "8px 16px",
  background: "transparent",

  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "1.5",
  letterSpacing: "0.08px",
  color: "#aeaeae",
  textTransform: "uppercase",

  "&:is(:hover,:focus)": {
    color: "var(--bg-btn-negative)",
  },
});

export const ProfileLinkStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "8px 16px",
  width: "100%",

  fontFamily: "inherit",

  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "1.5",
  letterSpacing: "0.08px",
  textDecoration: "none",
  textTransform: "uppercase",
  color: "#aeaeae",
  "&:is(:hover,:focus)": {
    color: "var(--bg-btn-hover)",
  },
};
