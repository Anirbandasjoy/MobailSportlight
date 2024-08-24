import { useCurrentUserQuery } from "@/redux/baseApi";
import React, { useEffect } from "react";

import { Navigate, useLocation } from "react-router-dom";

const AdminRouter = ({ children }: { children: React.ReactNode }) => {
  const { data: user, isLoading } = useCurrentUserQuery();

  const location = useLocation();
  useEffect(() => {
    localStorage.setItem("location", location.pathname);
  }, [location.pathname]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (user && user?.payload?.role === "admin") {
    return children;
  }
  return <Navigate to="/" state={location?.pathname} replace />;
};

export default AdminRouter;
