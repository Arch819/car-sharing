import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage";
import FavoritePage from "../pages/FavoritePage";
import Layout from "./Layout";
import SignUpPage from "pages/SignUpPage";
import SignInPage from "pages/SignInPage";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefresh } from "store/auth/authSelectors";
import { useEffect } from "react";
import { refreshThunk } from "store/auth/authThunk";
import Loader from "./Loader";

function App() {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefresh);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefresh ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/signup"
          element={<RestrictedRoute component={<SignUpPage />} />}
        />
        <Route
          path="/signin"
          element={<RestrictedRoute component={<SignInPage />} />}
        />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route
          path="/favorites"
          element={<PrivateRoute component={<FavoritePage />} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
