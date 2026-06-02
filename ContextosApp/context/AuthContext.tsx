import React, { createContext, useContext, useState } from 'react';

// Tipos y contexto de autenticación global
// solo estos dos roles se solicitan en la app
type Role = 'admin' | 'common';

interface AuthContextType {
  role: Role | null;
  isLoggedIn: boolean;
  login: (selectedRole: Role) => void;
  logout: () => void;
}

// Creamos el contexto, arranca en null hasta que el Provider lo inicialice
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

  // Guarda el rol elegido y marca la sesión como activa
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