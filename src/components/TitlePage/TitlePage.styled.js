import styled from "styled-components";

export const TitlePageStyle = styled.h2`
  font-size: ${(props) => props.$fs}px;
  font-weight: ${(props) => props.$fw};
  line-height: ${(props) => props.$lh};
  color: ${(props) => props.$color};
  margin-bottom: ${(props) => props.$mb}px;
`;
