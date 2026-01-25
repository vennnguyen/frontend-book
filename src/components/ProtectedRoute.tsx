import { useAuthStore } from "@/stores/useAuthStore";

import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { accessToken, user, loading } = useAuthStore();

  if (loading) {
    return ( <div className="flex h-screen items-center justify-center"> Đang tải ...
      </div> )
  }

  if (!accessToken || !user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;