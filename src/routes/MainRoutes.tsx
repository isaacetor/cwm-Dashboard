import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layout/homelayout/HomeLayout";
import Register from "../pages/auth/Register";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Register />,
      },
    ],
  },
]);
