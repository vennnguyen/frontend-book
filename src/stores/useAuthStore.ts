/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { toast } from "sonner";
import { set } from "zod";
import { get } from "react-hook-form";
import { authService } from "@/services/authService";

export const useAuthStore = create((set, get) => ({
  accessToken: null,
  user: null,
  loading: false,

  signUp: async (lastName, firstName, phone, email, password) => {
    try {
      set({ loading: true });
      //goi api
      await authService.signUp(lastName, firstName, password, email, password);
      toast.success("Đăng kí thành công");
    } catch (error) {
      console.error(error);
      toast.error("Đăng kí thất bại");
    } finally {
      set({ loading: false }); // call api thành công
    }
  },
}));
