import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AuthRedirect = ({ children }) => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  console.log("Protected Route");

  return currentUser ? <Navigate to="/home" /> : children;
};

export default AuthRedirect;
