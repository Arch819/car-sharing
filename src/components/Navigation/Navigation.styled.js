import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationListStyle = styled("ul")({
  display: "flex",
  gap: "20px",
  alignItems: "center",

  "@media screen and (min-width: 778px)": {
    gap: "40px",
  },
});

export const NavItemStyle = styled("li")({
  overflow: "hidden",
});
export const NavLinkStyle = styled(NavLink)({
  position: "relative",
  padding: "20px 0",
  color: "var(--color-text-primary)",
  fontSize: "18px",
  fontWeight: "500",
  lineHeight: "1.2",
  letterSpacing: "0.4",

  "&::after": {
    content: "''",
    display: "block",
    width: "100%",
    height: "4px",
    position: "absolute",
    bottom: "0",
    left: "-1px",
    borderRadius: "0 10px 10px 0",
    transform: "translateX(-100%)",
    transition: "transform var(--transition)",
    background: "var(--color-text-secondary)",
  },
  "&:is(:hover,:focus)": {
    color: "var(--color-text-secondary)",
    "&::after": {
      transform: "translateX(0)",
    },
  },

  "&.active": {
    color: "var(--color-text-secondary)",
  },
  "@media screen and (min-width: 778px)": {
    fontSize: "24px",
  },
});
