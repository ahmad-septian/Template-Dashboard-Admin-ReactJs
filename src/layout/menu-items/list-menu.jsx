import * as React from "react";
import { Home, Inventory } from "@mui/icons-material";

export const menuItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    menuName: "DashboardActive",
    icon: <Home sx={{ fontSize: "1.6em" }} />,
  },
  {
    label: "List Produk",
    path: "/list-produk",
    menuName: "ListProdukActive",
    icon: <Inventory sx={{ fontSize: "1.6em" }} />,
  },
];
