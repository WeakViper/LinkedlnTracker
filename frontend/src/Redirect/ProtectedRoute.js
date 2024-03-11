import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  console.log("Protected Route");

  return currentUser ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
