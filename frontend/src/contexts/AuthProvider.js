import React from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  const setToken = (token) => {
    if(token) return localStorage.setItem('areahq-token', token);
  }

  const removeToken = () => {
    localStorage.removeItem('areahq-token');
  }

  const token = () => {
    return localStorage.getItem('areahq-token');
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        removeToken
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}


export default AuthProvider;