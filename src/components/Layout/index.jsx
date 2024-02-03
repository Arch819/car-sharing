import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Notify } from "notiflix";
import { selectError, selectIsLoading } from "store/appState/appStateSelectors";
import Header from "../Header";
import Loader from "../Loader";

function Layout() {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    error && Notify.failure(error);
  });
  return (
    <>
      <Header />
      <main>
        {loading && <Loader />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default Layout;
