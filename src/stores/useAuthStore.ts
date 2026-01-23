/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { toast } from "sonner";
import { authService } from "@/services/authService";
import type { AuthState } from "@/types/store";

export const useAuthStore = create<AuthState>((set, get) => ({
  accessToken: null,
  user: null,
  loading: false,
  clearState: () => {
    set({ accessToken: null, user: null, loading: false });
  },

  signUp: async (lastName, firstName, phone, email, password) => {
    try {
      set({ loading: true });
      //goi api
      await authService.signUp(lastName, firstName, phone, email, password);
      toast.success("Đăng kí tài khoản thành công");
    } catch (error: any) {
      console.error(error);

      toast.error(error.response?.data?.message);
    } finally {
      set({ loading: false }); // call api thành công
    }
  },
  signIn: async (email: string, password: string) => {
    try {
      set({ loading: true });
      const { accessToken } = await authService.signIn(email, password);

      set({ accessToken });
      await get().fetchMe();
      toast.success("Đăng nhập tài khoản thành công");
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Có lỗi xảy ra, vui lòng thử lại";

      toast.error(message);
      throw error;
    } finally {
      set({ loading: false });
    }
  },
  signOut: async () => {
    try {
      get().clearState();
      await authService.signOut();
      toast.success("Đăng xuất tài khoản thành công");
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Có lỗi xảy ra, vui lòng thử lại";

      toast.error(message);
      throw error;
    }
  },
  fetchMe: async () => {
    try {
      set({ loading: true });
      const user = await authService.fetchMe();

      set({ user });
    } catch (error) {
      set({ user: null, accessToken: null });
      toast.error("Lỗi xảy ra lấy dữ liệu.Hãy thử lại");
      throw error;
    } finally {
      set({ loading: false });
    }
  },
  refresh: async () => {
    try {
      set({ loading: true });
      const { user, fetchMe } = get();
      const accessToken = await authService.refresh();
      set({ accessToken });
      if (!user) {
        await fetchMe();
      }
    } catch (error) {
      console.error(error);
      toast.error("Phiên đăng nhập hết hạn.");
      get().clearState();
    } finally {
      set({ loading: false });
    }
  },
}));
