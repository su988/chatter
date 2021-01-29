import React, { Fragment, useState, useEffect } from 'react';
import { db } from '../services/firebase';

export default function UserList({ channelId }) {
  const [userList, setUserList] = useState();

  useEffect(() => {
    //get user list in a channel
    let userRef = db.ref('Users');
    userRef.on('value', (snapshot) => {
      const users = snapshot.val();
      let tempList = [];
      for (let id in users) {
        if (users[id]['channels'][channelId]) {
          tempList.push(users[id]['username']);
        }
      }

      setUserList(tempList);
    });
  }, []);

  const renderList =
    userList && userList.map((user, index) => <div>{user}</div>);

  return <>{renderList}</>;
}
