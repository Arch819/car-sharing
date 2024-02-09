import Logo from "../Logo";
import Navigation from "components/Navigation";
import { HeaderContainerStyle, HeaderStyle } from "./Header.styled";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "store/auth/authSelectors";
import UserSettings from "components/UserSettings";

function Header() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <HeaderStyle>
      <HeaderContainerStyle className="container">
        <Logo />
        <Navigation />
        {/* {isLoggedIn && */}
        <UserSettings />
        {/* } */}
      </HeaderContainerStyle>
    </HeaderStyle>
  );
}

export default Header;
