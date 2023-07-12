import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/layout/dashlayout/dashboard_layout";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/home/dashboard";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard/home",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        hasErrorBoundary: true,
        errorElement: <p>error with this page</p>,
      },
    ],
  },
  {
    path: "*",
    element: <p>404!!! error page doesn't exist</p>,
  },
]);
