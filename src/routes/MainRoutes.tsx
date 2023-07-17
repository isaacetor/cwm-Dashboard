import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/layout/dashlayout/dashboard_layout";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/home/dashboard";
import ErrorBoundary from "../utils/errorHandlers/errorboundary";
import Payment from "../pages/home/Payment";

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
    path: "/dashboard/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        path: "home",
        element: <Dashboard />,
        hasErrorBoundary: true,
        errorElement: (
          <ErrorBoundary>
            <p></p>
          </ErrorBoundary>
        ),
        ErrorBoundary: null,
      },
      {
        path: "payment",
        element: <Payment />,
      },
    ],
  },
  {
    path: "*",
    element: <p>404!!! error page doesn't exist</p>,
  },
]);
