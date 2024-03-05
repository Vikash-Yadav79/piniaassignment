import React from 'react';
import { Route, Navigate } from 'react-router-dom'; // Import Route and Navigate
import { useAuthStore } from '../store/authStore';

interface ProtectedRouteProps {
  path: string;
  element: React.ReactNode; // Change type to React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ path, element }) => {
  const authStore = useAuthStore();

  // Check if user is authenticated, if not, redirect to login page
  return authStore.isAuthenticated ? <Route path={path} element={element} /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
