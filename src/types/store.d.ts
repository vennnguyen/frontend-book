import type { User } from "./user";

export interface AuthState {
  accessToken: string | null;
  user: User | null;
  loading: boolean;
  signUp: (
    lastName: string,
    firstName: string,
    phone: string,
    email: string,
    password: string,
  ) => Promise<void>;

  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  clearState: () => void;
  fetchMe: () => Promise<void>;
  refresh: () => Promise<void>;
}
