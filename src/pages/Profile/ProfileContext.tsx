import { createContext, useContext, ReactNode } from "react";
import { User } from "@api/user/types";

interface ProfileContextType {
  user: User;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

interface ProfileProviderProps {
  user: User;
  children: ReactNode;
}

export function ProfileProvider({ user, children }: ProfileProviderProps) {
  return (
    <ProfileContext.Provider value={{ user }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
} 