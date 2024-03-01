import React, { Suspense } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { DrawerHeader } from "./drawerStyle";
import { Box, Typography } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import Loading from "@/global-component/Loading";
import Header from "@/layout/header";
import routes from "@/routes";

export default function MiniDrawer() {
  return (
    <Box sx={{ display: "flex", backgroundColor: "var(--color-background)" }}>
      <CssBaseline />
      <Header />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
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
      </Box>
    </Box>
  );
}
