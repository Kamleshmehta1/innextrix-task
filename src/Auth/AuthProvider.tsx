import React, { createContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { initialize } from '../redux/slice/authSlice';

export const AuthContext = createContext({ isAuthenticated: false });

type authProps = {
  children: React.ReactNode;
};

function AuthProvider(props: authProps) {
  const { children } = props;
  const dispatch = useDispatch();
  const authSliceData = useSelector((state: RootState) => state?.authContext);

  useEffect(() => {
    const isAuthenticated = !!JSON.parse(
      localStorage.getItem('isAuthenticated')
    );

    if (isAuthenticated) {
      dispatch(initialize({ isAuthenticated }));
    }
  }, [dispatch]);

  return (
    <AuthContext.Provider value={{ ...authSliceData }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
