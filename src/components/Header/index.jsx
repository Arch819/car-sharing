import Logo from "../Logo";
import {
  HeaderContainerStyle,
  HeaderStyle,
  NavItemStyle,
  NavLinkStyle,
  NavigationListStyle,
} from "./Header.styled";

function Header() {
  return (
    <HeaderStyle>
      <HeaderContainerStyle className="container">
        <Logo />
        <nav>
          <NavigationListStyle>
            <NavItemStyle>
              <NavLinkStyle to="/">Home</NavLinkStyle>
            </NavItemStyle>
            <NavItemStyle>
              <NavLinkStyle to="/catalog">Catalog</NavLinkStyle>
            </NavItemStyle>
            <NavItemStyle>
              <NavLinkStyle to="/favorites">Favorite</NavLinkStyle>
            </NavItemStyle>
          </NavigationListStyle>
        </nav>
      </HeaderContainerStyle>
    </HeaderStyle>
  );
}

export default Header;
