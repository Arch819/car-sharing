import styled from "styled-components";

export const BackdropModalStyle = styled("div")({
  position: "fixed",
  top: "0",
  left: "0",
  zIndex: "9999",
  width: "100%",
  height: "100%",
  paddingRight: "6px",

  background: "var(--bg-backdrop)",
});

export const ModalContainerStyle = styled("div")({
  width: "541px",
  position: "absolute",
  top: "50%",
  left: "50%",
  padding: "40px",
  borderRadius: "24px",
  background: "var(--bg-modal)",
  transform: "translate(-50%, -50%)",
});

export const ModalImgContainerStyle = styled("div")({
  width: "460px",
  height: "248px",
  overflow: "hidden",
  borderRadius: "14px",
  marginBottom: "14px",
});

export const ModalTopListBoxStyle = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  marginTop: "8px",
  marginBottom: "14px",
});

export const AdvertDescriptionStyle = styled("p")({
  marginBottom: "24px",
  color: "var(--color-text-primary)",
  fontSize: "14px",
  lineHeight: "1.4",
});

export const ModalTextBoxStyle = styled("div")({
  marginBottom: "24px",
});

export const AccessoriesTittleStyle = styled("h4")({
  marginBottom: "8px",
  color: "var(--color-text-primary)",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "1.4",
});

export const RentalConditionsTitleStyle = styled("h4")({
  color: "var(--color-text-primary)",
  fontSize: "14px",
  lineHeight: "1.4",
  marginTop: "24px",
  marginBottom: "8px",
});

export const RentalConditionsListStyle = styled("ul")({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
});

export const RentalConditionsItemStyle = styled("li")({
  padding: "7px 14px",
  color: "var(--color-text-conditions)",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: "-0.24px",
});

export const RentalConditionsSpanStyle = styled("span")({
  color: "var(--color-text-secondary)",
  fontWeight: 600,
});

export const ModalSubmitBtnStyle = styled("a")({
  paddingLeft: "50px",
  paddingRight: "50px",
});
