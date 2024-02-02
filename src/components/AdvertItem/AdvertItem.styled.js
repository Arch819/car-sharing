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

export const ImagesStyle = styled("img")({
  // borderRadius: "14px",
});

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

// make: "Volvo";
// model: "XC90";
// year: 2019;
// rentalPrice: "$50";
// id: 9584;

// address: "456 Example Avenue, Lviv, Ukraine";
// type: "SUV";

// accessories: (3)[
//   ("Nappa leather seats",
//   "Bowers & Wilkins premium sound system",
//   "Head-up display")
// ];
// description: "The Volvo XC90 is a premium SUV that offers exceptional safety, advanced technology, and elegant design.";
// engineSize: "2.0L 4-cylinder";
// fuelConsumption: "8.3";
// functionalities: (3)[
//   ("IntelliSafe advanced safety features",
//   "Pilot Assist semi-autonomous driving",
//   "Four-zone automatic climate control")
// ];
// img: "https://ftp.goit.study/img/cars-test-task/volvo_xc90.jpeg";
// mileage: 5352;
// rentalCompany: "Premium Auto Rentals";
// rentalConditions: "Minimum age: 21\nValid driver's license\nProof of insurance required";
