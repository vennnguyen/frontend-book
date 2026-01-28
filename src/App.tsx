import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/client/Home";

import { Toaster } from "sonner";
import Dashboard from "./pages/admin/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuthStore } from "./stores/useAuthStore";
import { useEffect } from "react";
import AccountPage from "./pages/client/AccountPage";

function App() {
  const refresh = useAuthStore((s) => s.refresh)
  useEffect(()=>{
    refresh()
  }, [])
  return (
    <>
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          style: {
            zIndex: 9999,
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          {/* public route */}
          <Route path="/" element={<Home />} />
          {/* protected route */}
          <Route element={<ProtectedRoute />}>
            <Route path="/account" element={<AccountPage/>}/>
            <Route path="/admin" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
