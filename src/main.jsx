import React from "react";
import ReactDOM from "react-dom/client";
import { App, Root, ErrorPage } from "./App.jsx";
import { LandingPage } from "./pages/landing.jsx";
import { About } from "./pages/about.jsx";
// import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import { Global, css } from "@emotion/react";

const globalStyles = css`
  :root {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color-scheme: light dark;
    background-color: #ffffff;
    color: #333;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
  }

  main {
    flex: 1;
    padding: 0;
    width: 100%;
  }

  h1, h2 {
    color: #d84315;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <Root>
        <ErrorPage />
      </Root>
    ),
    children: [
      { index: true, element: <LandingPage /> },
      { path: "about", element: <About />},
      { path: "contact", element: <div>Contact</div> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <RouterProvider router={router} />
  </React.StrictMode>
);
