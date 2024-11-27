import { createBrowserRouter, Outlet } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import Dashboard from "./Pages/Dashboard";
import Article from "./Pages/Article";
import ArticleDetail from "./Pages/ArticleDetail";
import NotFound from "./Pages/NotFound";
import Write from "./Pages/Write";
import ProfilePage from "./Pages/ProfilePage";
import DashboardHimatepa from "./HIMATEPA/dashboardHimatepa";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/article",
        element: <Article />,
        children: [
          {
            path: ":id",
            element: <ArticleDetail />,
          },
        ],
      },
    ],
  },
  {
    path: "/write",
    element: <Write />,
  },
  {
    path: "*",
    element: <NotFound />,
  },

  {
    path: "himatepa",
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "home",
        element: <DashboardHimatepa />,
      },
    ],
  },
]);
