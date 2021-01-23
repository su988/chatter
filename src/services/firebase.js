import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDKwVTx-yL2SrMtEL6MDvUoiG_10FfSlAk',
  authDomain: 'chatter-62d0d.firebaseapp.com',
  databaseURL: 'https://chatter-62d0d-default-rtdb.firebaseio.com',
  projectId: 'chatter-62d0d',
  storageBucket: 'chatter-62d0d.appspot.com',
  messagingSenderId: '743371539116',
  appId: '1:743371539116:web:e6e89333e1ba45f2665509'
}); // Initialize Firebase

export const auth = firebase.auth();
export default app;
