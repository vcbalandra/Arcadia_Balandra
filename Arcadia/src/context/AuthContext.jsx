import React, { createContext, useState, useContext, useEffect } from 'react';

export const AuthContext = createContext();


export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = document.cookie.split('; ').find(row => row.startsWith('token='));
    if (savedToken) {
      const tokenValue = savedToken.split('=')[1];
      setToken(tokenValue);
      setIsAuthenticated(true);
    }
  }, []);

  const setAuthData = ({ isAuthenticated, user, token }) => {
    setIsAuthenticated(isAuthenticated);
    setUser(user);
    setToken(token);
    document.cookie = `token=${token}; path=/; max-age=86400`; 
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, token, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};