import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefresh } from "store/auth/authSelectors";

const PrivateRoute = ({ redirectTo = "/", component: Component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefresh = useSelector(selectIsRefresh);
  const shouldRedirected = !isLoggedIn && !isRefresh;

  return shouldRedirected ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
