import React from "react";
const Dashboard = React.lazy(() => import("@/pages/dashboard"));
const ListProduk = React.lazy(() => import("@/pages/list-product"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/list-produk", name: "ListProduk", element: ListProduk },
];

export default routes;
