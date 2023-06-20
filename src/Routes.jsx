import { Navigate, createBrowserRouter } from "react-router-dom";
import { BioenWebSiteApp } from "./BioenWebSiteApp";
import { ErrorPage, LandingPage, ServicesPage } from "./components/pages";

export const getRoutes = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <BioenWebSiteApp />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "servicios",
          element: <ServicesPage />,
        },
        {
          path: "error",
          element: <ErrorPage />,
        },
        {
          path: "*",
          element: <Navigate to={"/"} />,
        },
      ],
    },
  ]);
