import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

interface User {
  name: string;
  email: string;
  role: 'admin' | 'client';
}

interface AuthContextValue {
  user: User | null;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string, role?: 'admin' | 'client') => boolean;
  resetPassword: (email: string, newPassword: string) => boolean;
  enterAsClient: () => void;
  logout: () => void;
}

const USERS_KEY = 'batir-auth-users';

const AuthContext = createContext<AuthContextValue | null>(null);

function readUsers(): Record<string, { name: string; password: string }> {
  const raw = localStorage.getItem(USERS_KEY);
  if (!raw) {
    return {
      'adminbatir': {
        name: 'adminbatir',
        password: 'admin123'
      }
    };
  }

  try {
    return JSON.parse(raw) as Record<string, { name: string; password: string }>;
  } catch {
    return {};
  }
}

function writeUsers(users: Record<string, { name: string; password: string }>) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const value = useMemo<AuthContextValue>(() => ({
    user,
    login(email, password) {
      const users = readUsers();
      const account = users[email.toLowerCase()];

      if (!account || account.password !== password) {
        return false;
      }

      setUser({ name: account.name, email, role: email.toLowerCase() === 'adminbatir' ? 'admin' : 'client' });
      return true;
    },
    signup(name, email, password, role = 'client') {
      const users = readUsers();
      const key = email.toLowerCase();

      if (users[key]) {
        return false;
      }

      users[key] = { name, password };
      writeUsers(users);
      // Only switch user if no one is currently logged in
      if (!user) {
        setUser({ name, email, role });
      }
      return true;
    },
    enterAsClient() {
      setUser({ name: 'Client invité', email: 'guest@batir-excellence.fr', role: 'client' });
    },
    resetPassword(email, newPassword) {
      const users = readUsers();
      const key = email.toLowerCase();

      if (!users[key]) {
        return false;
      }

      users[key].password = newPassword;
      writeUsers(users);
      return true;
    },
    logout() {
      setUser(null);
    },
  }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
}
