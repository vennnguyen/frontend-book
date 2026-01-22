import api from "@/lib/axios";
import axios from "@/lib/axios";

export const authService = {
  signUp: async (
    lastName: string,
    firstName: string,
    phone: string,
    email: string,
    password: string,
  ) => {
    const res = await api.post(
      "/auth/signup",
      { lastName, firstName, phone, email, password },
      { withCredentials: true },
    );
    return res.data;
  },
};
