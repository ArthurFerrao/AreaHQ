import React, { useState, useCallback } from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('areahq-token'));
  
  const setAuthToken = useCallback(token => {
    localStorage.setItem('areahq-token', token);
    setToken(token);
  }, ['areahq-token']);

  const removeAuthToken = useCallback(() => {
    localStorage.removeItem('areahq-token');
    setToken(undefined);
  }, ['areahq-token']);

  return (
    <AuthContext.Provider
      value={{
        token,
        setAuthToken,
        removeAuthToken
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}


export default AuthProvider;