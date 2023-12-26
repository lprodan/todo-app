import { lazy } from "react";
import { RouteObject, useRoutes, Navigate } from "react-router-dom";

const Home = lazy(() => import("./Home/Home.tsx"));
const About = lazy(() => import("./About/About.tsx"));
const Auth = lazy(() => import("./Auth/Auth.tsx"));
const Login = lazy(() => import("./Auth/Login.tsx"));
const SignUp = lazy(() => import("./Auth/SignUp.tsx"));
const ResetPassword = lazy(() => import("./Auth/ResetPassword.tsx"));
const TodoList = lazy(() => import("./Todo/TodoList/TodoList.tsx"));

interface Props {
  isAuthenticated: boolean;
}

export const Routes = ({ isAuthenticated }: Props) => {
  const routes: RouteObject[] = [
    {
      path: "/",
      Component: Home,
    },
    {
      path: "/about",
      Component: About,
    },
    {
      path: "*",
      element: <Navigate to={isAuthenticated ? "/tasks" : "/auth/login"} />,
    },
  ];

  if (isAuthenticated) {
    routes.push({
      path: "/tasks",
      Component: TodoList,
    });
  } else {
    routes.push({
      path: "/auth",
      Component: Auth,
      children: [
        {
          path: "login",
          Component: Login,
        },
        {
          path: "signup",
          Component: SignUp,
        },
        {
          path: "reset-password",
          Component: ResetPassword,
        },
      ],
    });
  }

  return useRoutes(routes);
};
