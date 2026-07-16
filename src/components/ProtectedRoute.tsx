import { Navigate, useLocation } from 'react-router-dom';
import type { ReactElement } from 'react';
import { useAuth } from '../auth/AuthContext';

export default function ProtectedRoute({
  children,
  requireRole,
}: {
  children: ReactElement;
  requireRole?: 'admin' | 'client';
}) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (requireRole && user.role !== requireRole) {
    return <Navigate to="/accueil" replace />;
  }

  return children;
}
