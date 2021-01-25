import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../services/firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    let isUnmount = false;

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!isUnmount) {
        setCurrentUser(user);
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
      isUnmount = true;
    };
  }, []);

  const value = {
    currentUser,
    signup,
    login
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
