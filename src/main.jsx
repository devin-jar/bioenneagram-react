import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import TagManager from "react-gtm-module";

import { getRoutes } from "./Routes";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const router = getRoutes();

const tagManagerArgs = {
  gtmId: "GTM-KGBLNSF",
};

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
