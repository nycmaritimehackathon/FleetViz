import Engineering from "views/Engineering.jsx";
import Operations from "views/Operations.jsx"
import Icons from "views/Icons.jsx";
import Map from "views/Map.jsx";
import Notifications from "views/Notifications.jsx";
import Rtl from "views/Rtl.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import UserProfile from "views/UserProfile.jsx";

var routes = [
  {
    path: "/engineering",
    name: "Engineering",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-settings",
    component: Engineering,
    layout: "/admin"
  },
  {
    path: "/operations",
    name: "Operations",
    rtlName: "الرموز",
    icon: "tim-icons icon-world",
    component: Operations,
    layout: "/admin"
  },
  {
    path: "/map",
    name: "Sales",
    rtlName: "خرائط",
    icon: "tim-icons icon-chart-pie-36",
    component: Map,
    layout: "/admin"
  },
  {
    path: "/map",
    name: "Cargo",
    rtlName: "خرائط",
    icon: "tim-icons icon-app",
    component: Map,
    layout: "/admin"
  },
  {
    path: "/map",
    name: "Support",
    rtlName: "خرائط",
    icon: "tim-icons icon-support-17",
    component: Map,
    layout: "/admin"
  },
];
export default routes;
