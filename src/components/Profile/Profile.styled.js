import styled from "styled-components";

export const ProfileBoxStyle = styled("div")({
  position: "absolute",
  right: "0",
  top: "0px",
  width: "400px",
  height: "100%",
  padding: "40px 20px 0",
  background: "var(--bg-btn)",
  textAlign: "center",
});

export const ImageBoxStyle = styled("div")({
  border: "1px solid",
  position: "relative",
  width: "150px",
  height: "150px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  borderRadius: "100%",
  margin: "0 auto",
  marginBottom: "60px",

  "&::after": {
    content: "''",
    width: "100%",
    height: "1px",
    borderRadius: "12px",
    // background: "#000",
    position: "absolute",
    left: 0,
    bottom: "-30px",
    zIndex: "100",
    boxShadow: "0 0 10px 2px #272727",
  },
});

export const AvatarSvgStyle = styled("svg")({
  width: "100%",
  height: "100%",
  background: "#171717",
  fill: "#e6e6e6",
  borderRadius: "100%",
});

export const InfoUserListStyle = styled("ul")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "30px",
});

export const InfoUserItemStyle = styled("li")({
  position: "relative",
  fontSize: "22px",
  fontWeight: "500",
  lineHeight: "1.3",

  "& a": {
    color: "var(--color-text-btn)",
  },

  "&::after": {
    content: "''",
    width: "100%",
    height: "1px",
    borderRadius: "12px",
    background: "#000",
    position: "absolute",
    left: 0,
    zIndex: "100",
    bottom: "-10px",
    boxShadow: "0 0 10px 1px #272727",
  },
});

export const ProfileTitleStyle = styled("h2")({
  fontSize: "32px",
  fontWeight: "600",
  lineHeight: "1.1",

  marginBottom: "40px",
});
export const Button = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  transition: var(--transition);

  &:hover {
    transform: translateX(-50%) scale(1.2);
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
export const IconBtnSvg = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--bg-btn-hover);
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
