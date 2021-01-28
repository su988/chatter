import React, { useState, useEffect, useContext } from 'react';
import { auth, db } from '../services/firebase';

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

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (user) {
        const userRef = db.ref('Users/' + user.uid);
        const newUser = {
          email: user.email,
          username: user.email.match(/^(.*?)@/)[1],
          photoUrl: '',
          channels: { Welcome: true }
        };
        userRef.once('value', (snapshot) => {
          if (!snapshot.exists()) {
            userRef.set(newUser);
          }
        });
        console.log(user.email);
      }

      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
