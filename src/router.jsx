import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import AddElement from "./pages/addElement";
import ErrorPage from "./pages/ErrorPage";
import Header from "./composantes/Header";
import Profil from "./composantes/Profil";
export default function Router(props) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header state={props.state}/><div><Profil state={props.state}/><Index /></div></>,
      errorElement: <><Header state={props.state}/><div><Profil state={props.state}/><ErrorPage /></div></>
    },
    {
      path: "/addElement",
      element: <><Header state={props.state}/><div><Profil state={props.state}/><AddElement /></div></>,
    }])

  return <RouterProvider router={router} />;
}
