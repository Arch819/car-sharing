import styled from "styled-components";

export const AddBtnStyle = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-btn-positive);

  transition: var(--transition);

  &:is(:hover, :focus) {
    box-shadow: 4px 4px 10px 2px #1e1e1e;
  }
`;

export const AddBtnSvgStyle = {
  width: "48px",
  height: "48px",
};
