import { useCurrentUserQuery } from "@/redux/baseApi";
import React, { useEffect } from "react";

import { Navigate, useLocation } from "react-router-dom";

const PribetRoutes = ({ children }: { children: React.ReactNode }) => {
  const { data: user, isLoading } = useCurrentUserQuery();

  const location = useLocation();
  useEffect(() => {
    localStorage.setItem("location", location.pathname);
  }, [location.pathname]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default PribetRoutes;
