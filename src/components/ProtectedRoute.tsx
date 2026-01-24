import { useAuthStore } from "@/stores/useAuthStore";
// import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = () => {
//   const { accessToken, user, loading, refresh, fetchMe } = useAuthStore();
//   const [starting, setStarting] = useState(true);

//   const init = async () => {
//     // có thể xảy ra khi refresh trang
//     if (!accessToken) {
//       await refresh();
//     }

//     if (accessToken && !user) {
//       await fetchMe();
//     }

//     setStarting(false);
//   };

//   useEffect(() => {
//     init();
//   }, [accessToken]);

//   if (starting || loading) {
//     return (
//       <div className="flex h-screen items-center justify-center">
//         Đang tải trang...
//       </div>
//     );
//   }

//   if (!accessToken) {
//     return (
//       <Navigate
//         to="/"
//         replace
//       />
//     );
//   }

//   return <Outlet></Outlet>;
// };
const ProtectedRoute = () => {
  const { accessToken, user, loading } = useAuthStore();

  if (loading) {
    return ( <div className="flex h-screen items-center justify-center">
      </div> )
  }

  if (!accessToken || !user) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;