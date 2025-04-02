// src/components/PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ element: Component, requiredRole, ...rest }) => {
  const { user } = useAuth();  // Access user from context

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/403" />;  // Redirect to Forbidden page
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
