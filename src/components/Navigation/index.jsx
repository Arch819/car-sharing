import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefresh } from "store/auth/authSelectors";
import {
  NavItemStyle,
  NavLinkStyle,
  NavigationListStyle,
} from "./Navigation.styled";
import UserSettings from "components/UserSettings";

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefresh = useSelector(selectIsRefresh);
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
        {!isLoggedIn && !isRefresh ? (
          <>
            <NavItemStyle>
              <NavLinkStyle to="/signin">Sign In</NavLinkStyle>
            </NavItemStyle>
            <NavItemStyle>
              <NavLinkStyle to="/signup">Sign Up</NavLinkStyle>
            </NavItemStyle>
          </>
        ) : (
          <UserSettings />
        )}
      </NavigationListStyle>
    </nav>
  );
}

export default Navigation;
