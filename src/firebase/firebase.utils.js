import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCqZ1k8MmIkrudw04aigUhQLkOZuxDS7sQ",
  authDomain: "crwn-db-c75cb.firebaseapp.com",
  databaseURL: "https://crwn-db-c75cb.firebaseio.com",
  projectId: "crwn-db-c75cb",
  storageBucket: "crwn-db-c75cb.appspot.com",
  messagingSenderId: "336287031248",
  appId: "1:336287031248:web:4b6aac68d544cdeaa7a3d5"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;