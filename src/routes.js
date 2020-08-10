import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Notifications from "views/Notifications.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";

var routes = [
  {
    path: "/user/admin",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/dashboard",
  },
  {
    path: "/icons",
    name: "Invest",
    icon: "tim-icons icon-money-coins",
    component: Icons,
    layout: "/dashboard",
  },
  {
    path: "/notifications",
    name: "Request Withdrawal",
    icon: "tim-icons icon-bank",
    component: Notifications,
    layout: "/dashboard",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/dashboard",
  },
  {
    path: "/tables",
    name: "Admin Transactions",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/dashboard",
  },
  {
    path: "/typography",
    name: "Admin all users",
    icon: "tim-icons icon-lock-circle",
    component: Typography,
    layout: "/dashboard",
  },
];
export default routes;
