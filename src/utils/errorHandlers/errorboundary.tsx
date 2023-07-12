import React, { useState, useEffect, ErrorInfo, ReactNode } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
};

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [errorInfo, setErrorInfo] = useState<ErrorInfo | null>(null);

  useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      setHasError(true);
      setError(error.error || new Error("Unknown error"));
      setErrorInfo({
        componentStack: error.filename
          ? `Error occurred at: ${error.filename}:${error.lineno}:${error.colno}`
          : "Error details unavailable",
      });
      // You can also log the error to an error tracking service here
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    // You can customize the error UI as per your needs
    return (
      <div>
        <h1>Something went wrong.</h1>
        <p>{error && error.toString()}</p>
        <div>{errorInfo && errorInfo.componentStack}</div>
      </div>
    );
  }

  // Render the wrapped components if there is no error
  return <>{children}</>;
};

export default ErrorBoundary;
