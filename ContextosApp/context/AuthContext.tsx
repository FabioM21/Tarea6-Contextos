import React, { createContext, useContext, useState } from 'react';

type Role = 'admin' | 'common';

interface AuthContextType {
  role: Role | null;
  isLoggedIn: boolean;
  login: (selectedRole: Role) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [role, setRole] = useState<Role | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = (selectedRole: Role): void => {
    setRole(selectedRole);
    setIsLoggedIn(true);
  };

  const logout = (): void => {
    setRole(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ role, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};