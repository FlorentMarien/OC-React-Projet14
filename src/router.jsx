import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import Viewlist from "./pages/Viewlist";
import ErrorPage from "./pages/ErrorPage";
import Header from "./composantes/Header";
export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header /><Index /></>,
      errorElement: <><Header /><ErrorPage /></>
    },
    {
      path: "/viewlist",
      element: <><Header /><Viewlist /></>,
    }])

  return <RouterProvider router={router} />;
}
