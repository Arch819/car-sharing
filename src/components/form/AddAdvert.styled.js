import styled from "styled-components";
import bgInputFile from "../../images/defaultAdvertModal.jpg";

export const TitleAdvertFormStyle = styled.h2`
  font-size: 30px;
  line-height: 1.3;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const AdvertImageFormStyle = {
  marginBottom: "40px",
};

export const AdvertsImageContainerStyle = styled.div`
  position: relative;
  max-width: 100%;
  height: 248px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #aeaeff;
  overflow: hidden;

  border-radius: 14px;
`;

export const DeleteImageStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: transparent;
  transform: translateY(120%);
  transition: var(--transition);

  div:is(:hover, :focus) > & {
    transform: translateY(0);
  }
`;

export const LabelAdvertImageStyle = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 100%;
  height: 248px;
  padding: 40px;
  border: 2px solid #aeaeff;
  border-radius: 14px;
  background-image: url("${bgInputFile}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  & input {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    opacity: 0;
    cursor: crosshair;
  }
`;

export const LabelAdvertTextStyle = styled.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.3;
  color: #aeaeff;
`;

export const AdvertDataBoxStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 40px;
`;
