import React, { useContext, useState } from 'react';
import { db } from '../services/firebase';

const UserContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [username, setUsername] = useState();
  const [photoUrl, setPhotoUrl] = useState();

  const getCurrentUserInfo = (userId) => {
    const userRef = db.ref('Users/' + userId);
    userRef.on('value', (snapshot) => {
      if (snapshot.val()) {
        const user = snapshot.val();
        setUsername(user['username']);
        setPhotoUrl(user['photoUrl']);
      }
    });
  };

  const value = {
    getCurrentUserInfo,
    username,
    photoUrl
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
