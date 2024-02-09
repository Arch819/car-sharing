import styled from "styled-components";

export const HeaderStyle = styled("header")({
  position: "sticky",
  top: "0",
  left: "0",
  zIndex: "999",
  width: "100%",
  background: "#f1f1f1",
  boxShadow: "0 1px 8px 0 #121417",
  borderRadius: "0 0 0 20px",
});

export const HeaderContainerStyle = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
