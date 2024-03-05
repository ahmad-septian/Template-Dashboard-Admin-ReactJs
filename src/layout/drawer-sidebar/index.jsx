import React, { Suspense, useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { DrawerHeader } from "./drawerStyle";
import { Box, Typography } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import Loading from "@/global-component/Loading";
import Header from "@/layout/header";
import routes from "@/routes";
import Loading2 from "@/global-component/Loading2";

export default function MiniDrawer() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Ganti angka 2000 dengan waktu loading yang diinginkan dalam milidetik
  }, []);
  return (
    <Box sx={{ display: "flex", backgroundColor: "var(--color-background)" }}>
      <CssBaseline />
      <Header />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {isLoading ? (
          <Loading2 />
        ) : (
          <Suspense fallback={Loading}>
            <Routes>
              {routes.map((route, idx) => {
                return (
                  route.element && (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      element={<route.element />}
                    />
                  )
                );
              })}
              <Route path="/" element={<Navigate to="dashboard" replace />} />
            </Routes>
          </Suspense>
        )}
      </Box>
    </Box>
  );
}
