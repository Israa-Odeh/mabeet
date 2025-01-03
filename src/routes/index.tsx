import { createBrowserRouter } from "react-router-dom";
import AppShellLayout from "@layouts/AppShellLayout";
import AuthRedirector from "./AuthRedirector";
import ProtectedRoute from "./ProtectedRoute";
import { ErrorPage, UserPage, SearchResultsPage } from "@pages/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShellLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AuthRedirector /> },
      {
        path: "user",
        element: (
          <ProtectedRoute role="User">
            <UserPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "search-results",
        element: (
          <ProtectedRoute role="User">
            <SearchResultsPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
