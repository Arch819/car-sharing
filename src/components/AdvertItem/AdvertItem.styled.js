import styled from "styled-components";

export const ImageBoxStyle = styled("div")({
  width: "274px",
  height: "268px",
  overflow: "hidden",
  position: "relative",
  marginBottom: "14px",
  borderRadius: "14px",
});

export const HeartBtnStyle = styled("button")({
  position: "absolute",
  top: "14px",
  right: "14px",
  background: "transparent",
});

export const HeartBtnSvgStyle = styled("svg")((props) => ({
  width: "18px",
  height: "18px",
  stroke: props.$isFavorite ? "var(--fill-color)" : "var(--stroke-color)",
  fill: props.$isFavorite ? "var(--fill-color)" : "none",
}));

export const TopTextStyle = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  marginBottom: "8px",
});

export const ItemPriceStyle = styled("p")({
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: 1.5,
  color: "var(--color-text-primary)",
});

export const BottomTextStyle = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  marginBottom: "28px",
});

export const BottomTextListStyle = styled("ul")({
  display: "flex",
  flexWrap: "wrap",
  gap: "6px",
  maxWidth: "100%",
});

export const BottomTextItemStyle = styled("li")({
  color: "var(--color-text-primary50)",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: 1.5,
  "&:not(:first-child)": {
    paddingLeft: "6px",
    borderLeft: "1px solid rgba(18, 20, 23, 0.10)",
  },
});

export const ItemLearnMoreBtn = styled("button")({
  width: "100%",
  color: "var(--color-text-btn)",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: 1.4,
});
