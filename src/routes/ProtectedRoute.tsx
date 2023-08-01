import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

const user = {
  name: "i",
};

// when user not signed in
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  if (user?.name) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" replace></Navigate>;
  }
};

// when user already signed in
export const SignedInProtectedRoute = ({ children }: ProtectedRouteProps) => {
  if (user?.name) {
    return <Navigate to="/dashboard" replace></Navigate>;
  } else {
    return <>{children}</>;
  }
};
