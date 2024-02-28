import styled from "styled-components";

export const AdvertTools = styled.div`
  position: absolute;
  top: 36px;
  right: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${(props) => (props.isOpen ? "4px" : "4px 0")};
  background-color: ${(props) => (props.isOpen ? "#00000045" : "transparent")};
  border-radius: 0 0 0 12px;
`;
export const AdvertToolBtnStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  &:last-child {
    transform: translateY(20%);
  }
  &:not(:first-child, :last-child) {
    margin-top: 10px;
  }
`;

export const AdvertToolsBtnStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
`;
