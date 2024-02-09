import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "store/auth/authSelectors";
import {
  NavItemStyle,
  NavLinkStyle,
  NavigationListStyle,
} from "./Navigation.styled";

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavigationListStyle>
        <NavItemStyle>
          <NavLinkStyle to="/">Home</NavLinkStyle>
        </NavItemStyle>
        <NavItemStyle>
          <NavLinkStyle to="/catalog">Catalog</NavLinkStyle>
        </NavItemStyle>
        {isLoggedIn && (
          <NavItemStyle>
            <NavLinkStyle to="/favorites">Favorite</NavLinkStyle>
          </NavItemStyle>
        )}
        {!isLoggedIn && (
          <>
            <NavItemStyle>
              <NavLinkStyle to="/signin">Sign In</NavLinkStyle>
            </NavItemStyle>
            <NavItemStyle>
              <NavLinkStyle to="/signup">Sign Up</NavLinkStyle>
            </NavItemStyle>
          </>
        )}
      </NavigationListStyle>
    </nav>
  );
}

export default Navigation;
