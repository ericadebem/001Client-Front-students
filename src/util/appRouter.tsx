import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Homepage } from "../pages/Homepage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
    ],
  },
]);
