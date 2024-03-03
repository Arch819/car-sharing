import { TitlePageStyle } from "./TitlePage.styled";

function TitlePage({
  text,
  fs = 32,
  wf = 600,
  lh = 1.1,
  color = "inherit",
  mb = 0,
}) {
  return (
    <TitlePageStyle $fs={fs} $wf={wf} $lh={lh} $color={color} $mb={mb}>
      {text}
    </TitlePageStyle>
  );
}

export default TitlePage;
