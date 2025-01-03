import { createBrowserRouter, Navigate } from "react-router-dom";
import AppShellLayout from "@layouts/AppShellLayout";
import AuthRedirector from "./AuthRedirector";
import ProtectedRoute from "./ProtectedRoute";
import { CitiesGrid, HotelsGrid } from "@pages/AdminPage/components";
import {
  ErrorPage,
  AdminPage,
  UserPage,
  SearchResultsPage,
  HotelPage,
  CheckoutPage,
  ConfirmationPage,
} from "@pages/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShellLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AuthRedirector /> },
      {
        path: "admin",
        element: (
          <ProtectedRoute role="Admin">
            <AdminPage />
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <Navigate to="cities" /> },
          { path: "cities", element: <CitiesGrid /> },
          { path: "hotels", element: <HotelsGrid /> },
        ],
      },
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
      {
        path: "hotel/:hotelId",
        element: (
          <ProtectedRoute role="User">
            <HotelPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "checkout",
        element: (
          <ProtectedRoute role="User">
            <CheckoutPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "confirmation",
        element: (
          <ProtectedRoute role="User">
            <ConfirmationPage />
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);
