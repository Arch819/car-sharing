import Logo from "../Logo";
import Navigation from "components/Navigation";
import { HeaderContainerStyle, HeaderStyle } from "./Header.styled";

function Header() {
  return (
    <HeaderStyle>
      <HeaderContainerStyle className="container">
        <Logo />
        <Navigation />
      </HeaderContainerStyle>
    </HeaderStyle>
  );
}

export default Header;
