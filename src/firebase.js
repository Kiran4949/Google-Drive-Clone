import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA1AWWA0dFqd0lWQDnNawGNwyoSUJbQYfA",
    authDomain: "drive-clone-4.firebaseapp.com",
    projectId: "drive-clone-4",
    storageBucket: "drive-clone-4.appspot.com",
    messagingSenderId: "334712332202",
    appId: "1:334712332202:web:b5db5c94bcfa2abeb2d5d3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }