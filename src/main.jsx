import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainRoute from "./Layout/MainRoute/MainRoute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Layout/Pages/HomePage/HomePage";
import TextEditor from "./Layout/Pages/TextEditor/TextEditor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute></MainRoute>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "textEditor",
        element: <TextEditor></TextEditor>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
