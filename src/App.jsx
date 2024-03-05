import React, { Component, Suspense, useState, useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "@/assets/css/index.css";
import Loading2 from "@/global-component/Loading2";

const DefaultLayout = React.lazy(() => import("@/layout/drawer-sidebar"));
const Login = React.lazy(() => import("@/pages/login"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Ganti angka 2000 dengan waktu loading yang diinginkan dalam milidetik
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loading2 />
      ) : (
        <HashRouter>
          <Suspense>
            <Routes>
              <Route
                exact
                path="/login"
                name="Login Page"
                element={<Login />}
              />
              <Route path="*" name="Home" element={<DefaultLayout />} />
            </Routes>
          </Suspense>
        </HashRouter>
      )}
    </div>
  );
}

export default App;
