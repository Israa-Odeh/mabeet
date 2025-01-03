import { createBrowserRouter } from "react-router-dom";
import AppShellLayout from "@layouts/AppShellLayout";
import LoginPage from "@pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShellLayout />,
    children: [{ index: true, element: <LoginPage /> }],
  },
]);
