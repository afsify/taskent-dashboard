import { lazy, Suspense } from "react";
import { userPath } from "./routeConfig";
import NotFound from "../pages/error/NotFound";
import { Routes, Route } from "react-router-dom";
import ServerError from "../pages/error/ServerError";
import Fallback from "../components/common/Fallback";

const Dashboard = lazy(() => import("../pages/user/Dashboard"));
const TaskManage = lazy(() => import("../pages/user/TaskManage"));
const UserManage = lazy(() => import("../pages/user/UserManage"));

function UserRoute() {
  return (
    <Routes>
      <Route path="/*" element={<NotFound />} />
      <Route path="error" element={<ServerError />} />
      <Route path={userPath.dashboard} element={<Dashboard />} />
      <Route path={userPath.taskManage} element={<TaskManage />} />
      <Route path={userPath.userManage} element={<UserManage />} />
    </Routes>
  );
}

export default function UserRouteWithSuspense() {
  return (
    <Suspense fallback={<Fallback />}>
      <UserRoute />
    </Suspense>
  );
}
