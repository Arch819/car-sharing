import { SectionStyled } from "./Section.styled";

function Section({ children, className }) {
  return <SectionStyled className={className}>{children}</SectionStyled>;
}

export default Section;
