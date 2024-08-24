import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "@/pages/home/home/Home";
import Foods from "@/pages/home/Foods/Foods";
import FoodDetails from "@/pages/home/Foods/FoodDetails";
import NotFound from "@/pages/notFound/NotFound";
import About from "@/pages/about/About";
import AddFood from "@/pages/food/addFood/AddFood";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import RegistationProcess from "@/pages/auth/RegistationProcess";
import PribetRoutes from "./pribetRouter";
import MyOrder from "@/pages/myOrder/MyOrder";
import AdminRouter from "./adminRoutes";
import Profile from "@/pages/profile/Profile";

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
        path: "/foods",
        element: <Foods />,
      },
      {
        path: "/food/:foodId",
        element: <FoodDetails />,
      },
      {
        path: "/about_us",
        element: <About />,
      },
      {
        path: "/profile/:userId",
        element: <Profile />,
      },
      {
        path: "/add-food",
        element: (
          <PribetRoutes>
            <AdminRouter>
              <AddFood />
            </AdminRouter>
          </PribetRoutes>
        ),
      },
      {
        path: "/user/activate/:token",
        element: <RegistationProcess />,
      },
      {
        path: "/my-order",
        element: (
          <PribetRoutes>
            <MyOrder />
          </PribetRoutes>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
