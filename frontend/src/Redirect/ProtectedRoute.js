import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, redirectTo }) => {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
