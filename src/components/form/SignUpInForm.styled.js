export const UserFormStyle = {
  width: "300px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  margin: "0 auto 20px",
};

export const ButtonSubmit = {
  margin: "10px auto 0",
  borderRadius: "10px",
  position: "relative",
  width: "180px",
  height: "40px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  border: "1px solid #34974d",
  backgroundColor: "#3aa856",

  "&, & span": {
    transition: "transform 0.3s, background 0.3s",
  },

  "&:is(:hover,:focus)": {
    background: "#34974d",
  },
  "&:active": {
    border: "1px solid #2e8644",
  },
};
