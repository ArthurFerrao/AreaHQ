import { createContext } from 'react';

const AuthContext = createContext({
  token: null,
  setAuthToken: () => {},
  removeAuthToken: () => {}
});

export default AuthContext;