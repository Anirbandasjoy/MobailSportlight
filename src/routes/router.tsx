import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "@/pages/home/home/Home";
import Mobails from "@/pages/home/mobails/Mobails";
import MobailDetails from "@/pages/home/mobails/MobailDetails";
import NotFound from "@/pages/notFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/mobails",
        element: <Mobails />,
      },
      {
        path: "/mobails/:mobailId",
        element: <MobailDetails />,
      },
    ],
  },
]);
