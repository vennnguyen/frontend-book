import api from "@/lib/axios";

// import axios from "@/lib/axios";

export const authService = {
  signUp: async (
    lastName: string,
    firstName: string,
    phone: string,
    email: string,
    password: string,
  ) => {
    const res = await api.post(
      "/sign-up",
      { lastName, firstName, phone, email, password },
      { withCredentials: true },
    );
    return res.data;
  },

  signIn: async (email: string, password: string) => {
    const res = await api.post(
      "/sign-in",
      {
        email,
        password,
      },
      { withCredentials: true },
    );
    return res.data;
  },

  signOut: async () => {
    const res = await api.post("/sign-out", {}, { withCredentials: true });
    return res.data;
  },

  fetchMe: async () => {
    const res = await api.get("/users/me", { withCredentials: true });
    return res.data;
  },
  refresh: async () => {
    const res = await api.get("/refresh", { withCredentials: true });
    return res.data.accessToken;
  },
};
