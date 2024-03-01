import React, { Component, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "@/assets/css/index.css";
import Loading from "@/global-component/Loading";

// Containers
const DefaultLayout = React.lazy(() => import("@/layout/drawer-sidebar"));
// Pages
const Login = React.lazy(() => import("@/pages/login"));

function App() {
  return (
    <div>
      <HashRouter>
        <Suspense fallback={Loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
