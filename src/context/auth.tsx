import React, { createContext, useContext, useEffect, useState } from 'react';
import { validate } from 'src/lib';
import { getUser, userSignIn, userSignOut, userSignUp } from 'src/services/storage';

interface AuthContextType {
  loggedUser: any;
  signInError: string;
  signUpError: string;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (email: string, password: string, cpf: string) => Promise<void>;
  clearErrors: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState<any>(null);
  const [signInError, setSignInError] = useState('');
  const [signUpError, setSignUpError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      if (loggedUser) {
        const user = await getUser(loggedUser.email);
        if (user && !user.error) {
          setLoggedUser(user);
        }
      }
      setIsLoading(false);
    };
    checkUser();
  }, [loggedUser]);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    setSignInError('');
    
    const user = await userSignIn(email, password);
    if (user && 'error' in user) {
      setSignInError(user.error);
      setIsLoading(false);
      return;
    }
    setLoggedUser(user);
    setIsLoading(false);
  };

  const signOut = async () => {
    setIsLoading(true);
    const user = await userSignOut(loggedUser.email);
    if (user && 'error' in user) {
      setSignInError(user.error);
      setIsLoading(false);
      return;
    }
    setLoggedUser(null);
    setIsLoading(false);
  };

  const signUp = async (email: string, password: string, cpf: string) => {
    setIsLoading(true);
    setSignUpError('');

    if (!validate.cpf(cpf)) {
      setSignUpError('CPF inválido.');
      setIsLoading(false);
      return;
    }

    const user = await userSignUp(email, password, cpf);
    if (user && 'error' in user) {
      setSignUpError(user.error);
      setIsLoading(false);
      return;
    }
    setLoggedUser(user);
    setIsLoading(false);
  };

  const clearErrors = () => {
    setSignInError('');
    setSignUpError('');
  };

  return (
    <AuthContext.Provider value={{ loggedUser, signInError, signUpError, isLoading, signIn, signOut, signUp, clearErrors }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};