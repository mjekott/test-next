import React, { createContext, useContext } from 'react';
import { useQuery } from 'react-query';
import { getMeFn } from '../services/authService';
import { IUser } from '../types';

interface Props {
  children: React.ReactNode;
}

type AuthState = {
  authUser: IUser | undefined;
  isLoading: boolean;
};

const AuthContextState = createContext<AuthState | undefined>(undefined);

const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const { data, isLoading } = useQuery('profile', getMeFn, {
    staleTime: 5 * 1000 * 1000
  });

  return (
    <AuthContextState.Provider value={{ authUser: data?.data, isLoading }}>
      {children}
    </AuthContextState.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => {
  const authState = useContext(AuthContextState);

  if (authState === undefined) {
    throw new Error(
      'useAuthContext must me used within an AuthContextProvider'
    );
  }
  return authState;
};
