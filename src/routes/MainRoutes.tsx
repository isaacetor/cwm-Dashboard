import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/layout/dashboard_layout";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/home/dashboard";
import ErrorBoundary from "../utils/errorHandlers/errorboundary";
import Payment from "../pages/home/Payment";
import Login from "../pages/auth/Login";
import NotFound from "../utils/errorHandlers/NotFound";
import { Suspense } from "react";
import Bills from "../pages/home/Bills";
import History from "../pages/home/History";
import { SignedInProtectedRoute } from "./ProtectedRoute";
import AuthLayout from "../components/layout/authlayout";
import Onboarding from "../pages/auth/Onboarding";
import MessageLayout from "../components/layout/MessageLayout";
import MessageResident from "../pages/home/MessageResident";
import Wards from "../pages/home/Wards";

export const element = createBrowserRouter([
  {
    path: "/",
    element: (
      <SignedInProtectedRoute>
        <Suspense fallback={<p>loading</p>}>
          <AuthLayout />
        </Suspense>
      </SignedInProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Register />,
      },

      {
        path: "login",
        element: (
          <Suspense fallback={<p>loading</p>}>
            <Login />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      // <ProtectedRoute>
      <Suspense fallback={<p>loading</p>}>
        <DashboardLayout />
      </Suspense>
      // </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>loading</p>}>
            <Dashboard />
          </Suspense>
        ),
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
        element: (
          <Suspense fallback={<p>loading</p>}>
            <Payment />
          </Suspense>
        ),
      },
      {
        path: "bills",
        element: (
          <Suspense fallback={<p>loading</p>}>
            <Bills />
          </Suspense>
        ),
      },
      {
        path: "history",
        element: (
          <Suspense fallback={<p>loading</p>}>
            <History />
          </Suspense>
        ),
      },
      {
        path: "wards",
        element: (
          <Suspense fallback={<p>loading</p>}>
            <Wards />
          </Suspense>
        ),
      },
      {
        path: "message",
        element: (
          <Suspense fallback={<p>loading</p>}>
            <MessageLayout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: <MessageResident />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "onboarding",
    element: (
      <Suspense fallback={<p>loading</p>}>
        <Onboarding />
      </Suspense>
    ),
  },
]);
