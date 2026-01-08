import { create } from "zustand";

export type AppRole =
  | "SUPER_ADMIN"
  | "CLINIC_ADMIN"
  | "RECEPTION"
  | "MANAGER"
  | "DOCTOR"
  | "STAFF"
  | "READONLY";

type SessionUser = {
  id: string;
  name: string;
  email?: string;
};

type SessionState = {
  isAuthenticated: boolean;

  user: SessionUser | null;
  role: AppRole | null;

  clinicId: string | null;
  clinicName: string | null;
  timezone: string | null;

  setSession: (s: Partial<SessionState>) => void;
  clearSession: () => void;
};

export const useSessionStore = create<SessionState>((set) => ({
  isAuthenticated: false,

  user: null,
  role: null,

  clinicId: null,
  clinicName: null,
  timezone: null,

  setSession: (s) => set((prev) => ({ ...prev, ...s })),
  clearSession: () =>
    set({
      isAuthenticated: false,
      user: null,
      role: null,
      clinicId: null,
      clinicName: null,
      timezone: null,
    }),
}));
