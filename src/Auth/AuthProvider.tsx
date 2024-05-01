import React, { createContext } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

type authProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext({ isAuthenticated: false });

function AuthProvider(props: authProps) {
  const { children } = props;
  const authSliceData = useSelector((state: RootState) => state?.authContext);

  return (
    <AuthContext.Provider value={{ ...authSliceData }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
