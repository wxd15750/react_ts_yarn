import { FC, Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// 懒加载
import { HomeOutlined } from "@ant-design/icons";
import { SRoutes } from "./type";
import Layouts from "@/layout";
const Home = lazy(() => import("@/pages/home"));
const Login = lazy(() => import("@/pages/login"));
const NotFound = lazy(() => import("@/pages/404"));

// 定义懒加载函数
const load = (Com: FC) => {
  return (
    <Suspense fallback={<div>...加载中</div>}>
      <Com></Com>
    </Suspense>
  );
};

const routes: SRoutes = [
  // 登录页路由
  {
    path: "/",
    element: load(Login),
    children: [
      {
        path: "/login",
        element: load(Login),
      },
    ],
  },
  // 首页路由
  {
    path: "/home",

    meta: {
      icon: <HomeOutlined />,
      title: "首页",
    },
    element: <Layouts></Layouts>,
    children: [
      {
        path: "/home",
        element: load(Home),
      },
    ],
  },

  {
    path: "/404",
    element: load(NotFound),
  },

  {
    path: "*", // 任意路径：除了上面路径以外其他路径
    element: <Navigate to="/404" />,
  },
];

/* 
自定义hook: 注册应用的所有路由
*/
export const useAppRoutes = () => {
  return useRoutes(routes);
};

// 找到要渲染成左侧菜单的路由
// export const findSideBarRoutes = () => {
//   const currentIndex = routes.findIndex((route) => route.path === "/react");
//   return routes[currentIndex].children as SRoutes;
// };

export default routes;
