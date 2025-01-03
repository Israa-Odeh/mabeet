import { createBrowserRouter } from "react-router-dom";
import AppShellLayout from "@layouts/AppShellLayout";
import {LoginPage, ErrorPage} from "@pages/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShellLayout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <LoginPage /> }],
  },
]);
