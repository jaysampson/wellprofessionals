import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthRedirect = ({ adminRoute, userRoute, children }) => {
  const { user } = useSelector((state) => state.auth);
  const users = user?.data?.roles === "user";
  const admin = user?.data?.roles === "admin"; // Safely access nested properties

  console.log(user?.data?.roles, "hello");

  if (adminRoute && users) {
    toast.info("You are not logged in as an admin");
    return <Navigate to="/dashboard" />;
  } else if (userRoute && admin) {
    toast.info("You are not logged in as a user");
    return <Navigate to="/admin/" />;
  } else if (!user) {
    toast.info("You are not logged in");
    return <Navigate to="/auth-login" />;
  }

  return children;
};
