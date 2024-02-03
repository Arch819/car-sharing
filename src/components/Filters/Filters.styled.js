import styled from "styled-components";

export const SelectPriceStyle = (width, isDropdownOpen) => ({
  control: (provided) => ({
    ...provided,
    height: "48px",

    backgroundColor: "#F7F7FB",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    padding: "0 10px 0 18px",
    cursor: "pointer",
    borderRadius: "14px",

    "&, &:is(:hover, :focus)": {
      outline: "none",
      border: "none",
    },
    ".price &": {
      paddingLeft: "39px",
    },
  }),
  option: (provided, { isFocused, isSelected }) => ({
    ...provided,
    backgroundColor: "#FFF",
    color: isSelected ? "#121417" : isFocused ? "#121417" : "#12141733",
    paddingBottom: "8px",
    cursor: "pointer",
  }),
  menu: (provided) => ({
    ...provided,
    padding: "14px 8px 14px 18px",
    borderRadius: "14px",
    backgroundColor: "#FFF",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#121417",
     fontSize: "18px",
    fontWeight: "500",
    lineHeight: "1.1",
  }),

  dropdownIndicator: (provided, props) => ({
    ...provided,
    color: "#121417",
    transform: props.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  container: (provided) => ({
    ...provided,
    width,
    "&, &:is(:hover, :focus)": {
      outline: "none",
      border: "none",
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#121417",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "1.1",
  }),
  menuList: (base) => ({
    ...base,
    background: "#FFF",
    borderRadius: "12px",
    overflowY: "scroll",
    width: `calc(100% - 7px)`,
    "& > div:last-child": {
      paddingBottom: "14px",
    },

    " ::-webkit-scrollbar": {
      width: "8px",
      background: "#FFF",
    },
    "::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
      background: "#1214170D",
    },
    " ::-webkit-scrollbar-track": {
      marginTop: "14px",
      marginBottom: "14px",
    },
  }),
});

export const FormaStyle = styled("form")({
  display: "flex",
  alignItems: "center",
  gap: "18px",
  marginBottom: "50px",

  padding: "0 162px",
});

export const FormLabelStyle = styled("label")({
  position: "relative",
});

export const FormLabelTextStyle = styled("span")({
  marginBottom: "8px",

  color: "var(--color-text-label)",
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "1.28",
});

export const FormTextAboveInputStyle = styled("span")({
  position: "absolute",
  top: "40px",
  left: "18px",
  zIndex: "99",

  color: "var(--color-text-primary)",

  fontSize: "18px",
  fontWeight: 500,
  lineHeight: "1.1",
});

export const FormMileageBoxStyle = styled("label")({
  display: "flex",
  alignItems: "center",
  borderRadius: "14px",
});

export const FormMileageLabelStyle = styled("label")({
  position: "relative",
  "& span": {
    top: "14px",
  },
});

export const MileageInputStyle = styled("input")({
  width: "160px",
  height: "48px",

  padding: "14px 24px",
  border: "none",
  backgroundColor: "#F7F7FB",

  color: "var(--color-text-primary)",

  fontSize: "18px",
  fontWeight: 500,
  lineHeight: "1.1",

  "&.from": {
    paddingLeft: "67px",
    borderRadius: "14px 0 0 14px",
    borderRight: "1px solid rgba(138, 138, 137, 0.20)",
  },

  "&.to": {
    paddingLeft: "45px",
    borderRadius: "0 14px 14px 0",
  },

  "&:is(:hover,:focus)": {
    outline: "none",
  },
});

export const FormaBtn = styled("button")({
  padding: "14px 44px",
  alignSelf: "end",
});
