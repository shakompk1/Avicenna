"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/navigation";

export type Role =
  | "SUPER_ADMIN"
  | "CLINIC_ADMIN"
  | "RECEPTION"
  | "MANAGER"
  | "DOCTOR"
  | "STAFF"
  | "READONLY";

export type SessionUser = {
  id: string;
  name: string;
  email?: string;
};

export type Membership = {
  clinicId: string;
  role: Exclude<Role, "SUPER_ADMIN">;
  clinicName?: string;
  timezone?: string;
};

export type Session = {
  user: SessionUser;
  platformRole?: "SUPER_ADMIN"; // если есть — это супер-админ
  activeClinicId?: string; // выбранный clinic context (важно для SUPER_ADMIN)
  memberships: Membership[]; // для обычных пользователей минимум 1
};

type AuthContextValue = {
  session: Session | null;
  login: (s: Session) => void;
  logout: () => void;
  setActiveClinic: (clinicId: string) => void; // для SUPER_ADMIN
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const STORAGE_KEY = "auth:session";

function getDefaultClinicId(session: Session) {
  // если у обычного пользователя 1 клиника — сразу она
  if (session.platformRole === "SUPER_ADMIN")
    return session.activeClinicId ?? null;
  return session.memberships[0]?.clinicId ?? null;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Session;
      setSession(parsed);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      if (session) localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
      else localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, [session]);

  function login(s: Session) {
    setSession(s);

    // redirect строго по структуре
    if (s.platformRole === "SUPER_ADMIN") {
      router.push("/clinics");
      return;
    }

    // обычный юзер должен попасть в клинику сразу
    const clinicId = getDefaultClinicId(s);
    if (!clinicId) {
      // это P0: у не-superadmin должна быть клиника
      router.push("/login");
      return;
    }

    router.push("/calendar");
  }

  function setActiveClinic(clinicId: string) {
    setSession((prev) => {
      if (!prev) return prev;
      if (prev.platformRole !== "SUPER_ADMIN") return prev;
      return { ...prev, activeClinicId: clinicId };
    });

    // вход в clinic scope всегда один, clinicId в контексте, не в URL
    router.push("/calendar");
  }

  function logout() {
    setSession(null);
    router.push("/login");
  }

  const value = useMemo<AuthContextValue>(
    () => ({ session, login, logout, setActiveClinic }),
    [session]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const v = useContext(AuthContext);
  if (!v) throw new Error("useAuth must be used inside AuthProvider");
  return v;
}
