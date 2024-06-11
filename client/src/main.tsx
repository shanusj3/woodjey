import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Shope from "./pages/Shope";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/shope",
        element: <Shope />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
