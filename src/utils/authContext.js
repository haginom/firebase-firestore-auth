import React, { createContext, useContext, useEffect, useState  } from "react";
import { auth } from "../components/Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const defaultContext = {
  currentUser: null,
}

export const AuthContext = createContext(defaultContext);
export const useAuthValue = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
 
  //use onAuthStateChanged - By using an observer, you ensure that the Auth object isn't in an intermediate state—such as initialization—when you get the current user. When you use signInWithRedirect, the onAuthStateChanged observer waits until getRedirectResult resolves before triggering.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{currentUser, setCurrentUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;