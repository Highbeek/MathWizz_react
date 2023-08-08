import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ condition, redirectPath, ...props }) => {
  return condition ? <Route {...props} /> : <Navigate to={redirectPath} />;
};

export default PrivateRoute;
