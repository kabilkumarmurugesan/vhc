// AppRouter.tsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import withLayout from "./hoc/withLayout";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import Records from "./pages/Records";
import UserProfile from "./pages/UserProfile";

const router = createBrowserRouter([
  {
    path: "/dashboard/home",
    element: React.createElement(withLayout(Home)),
  },
  {
    path: "/dashboard/patients",
    element: React.createElement(withLayout(Patients)),
  },
  {
    path: "/dashboard/appointments",
    element: React.createElement(withLayout(Appointments)),
  },
  {
    path: "/dashboard/records",
    element: React.createElement(withLayout(Records)),
  },
  {
    path: "/dashboard/userprofile",
    element: React.createElement(withLayout(UserProfile)),
  },
  {
    path: "/",
    element: React.createElement(withLayout(Home)),
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
