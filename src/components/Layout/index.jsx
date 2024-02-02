import React, { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Loader from "../Loader";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "store/appState/appStateSelectors";
import { Notify } from "notiflix";

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
