import React from "react";
import ReactDOM from "react-dom/client";
import TagManager from "react-gtm-module";

import { BioenWebSiteApp } from "./BioenWebSiteApp";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const tagManagerArgs = {
  gtmId: "GTM-KGBLNSF",
};

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BioenWebSiteApp />
  </React.StrictMode>
);
