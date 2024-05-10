import React from "react";
import ReactDOM from "react-dom/client";
import { App, Root, ErrorPage } from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import { Global, css } from "@emotion/react";

const globalStyles = css`
  body {
    font-family: sans-serif;
  }
`;

const router = createBrowserRouter([
  {
    path: "website",
    element: <Root />,
    errorElement: (
      <Root>
        <ErrorPage />
      </Root>
    ),
    children: [
      { index: true, element: <App /> },
      { path: "about", element: <div>About</div> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <RouterProvider router={router} />
  </React.StrictMode>
);
