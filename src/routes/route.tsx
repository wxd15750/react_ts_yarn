import { FC, Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// 懒加载
import { HomeOutlined } from "@ant-design/icons";
import { SRoutes } from "./type";
import Layouts from "@/layout";
const Home = lazy(() => import("@/pages/home"));
const Login = lazy(() => import("@/pages/login"));
const NotFound = lazy(() => import("@/pages/404"));
const Test = lazy(() => import("@/pages/test"));
const Screen1 = lazy(() => import("@/pages/screen/screen1"));
const Screen2 = lazy(() => import("@/pages/screen/screen2"));

// 定义懒加载函数
const load = (Com: FC) => {
  return (
    <Suspense fallback={<div>加载中...</div>}>
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
    hidden: true,
  },
  {
    path: "/syst",
    element: <Layouts></Layouts>,
    children: [
      // 首页路由
      {
        path: "home",
        element: load(Home),
        meta: {
          icon: <HomeOutlined />,
          title: "首页",
        },
        hidden: false,
      },

      // screen
      {
        path: "/syst/screen",
        meta: {
          icon: <HomeOutlined />,
          title: "数据大屏",
        },
        children: [
          {
            path: "/syst/screen/screen1",
            element: load(Screen1),
            meta: {
              title: "水晶球",
              icon: <HomeOutlined />,
            },
            hidden: false,
          },
          {
            path: "/syst/screen/screen2",
            element: load(Screen2),
            meta: {
              title: "折线图",
              icon: <HomeOutlined />,
            },
            hidden: false,
          },
        ],
        hidden: false,
      },
      // 测试
      {
        path: "test",
        element: load(Test),
        meta: {
          title: "测试",
        },
      },
      //权限管理
      {
        path: "acl",
        element: load(Test),
        meta: {
          title: "权限管理",
        },
      },
    ],
  },

  {
    path: "/404",
    element: load(NotFound),
    hidden: true,
  },

  {
    path: "*", // 任意路径：除了上面路径以外其他路径
    element: <Navigate to="/404" />,
    hidden: true,
  },
];

/* 
自定义hook: 注册应用的所有路由
*/
export const useAppRoutes = () => {
  return useRoutes(routes);
};

// 找到要渲染成左侧菜单的路由
export const findSideBarRoutes = () => {
  return routes.filter((route) => {
    if (route.path === "/syst") {
      return route.children;
    }
  });
};

export default routes;
