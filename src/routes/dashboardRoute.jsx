import DashboardLayout from "../Features/Dashboard/components/DashboardLayout";
import DashboardPage from "../Features/Dashboard/pages/DashboardPage";
import productRoute from "./productRoute";

const dashboardRoute = [
  {
    path: "/dashboard",
    element: <DashboardLayout/>,
    children: [
      {
        index: true,
        element: <DashboardPage/>,
      },
      ...productRoute
    ],
  },
];

export default dashboardRoute;