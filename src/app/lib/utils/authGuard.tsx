// app/shared/utils/authGuard.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "./authContext";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/register"); // Redirect to login if not authenticated
    }
  }, [user, router]);

  if (!user) return null; // Optionally show a loading spinner
  return <>{children}</>;
};
