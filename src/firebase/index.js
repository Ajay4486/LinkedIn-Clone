import firebase from 'firebase';
 
const firebaseConfig = {
    apiKey: "AIzaSyDMQgTktPGKJQfIo5OMA917u1zSiQuUkjU",
    authDomain: "linkedin-clone-main.firebaseapp.com",
    projectId: "linkedin-clone-main",
    storageBucket: "linkedin-clone-main.appspot.com",
    messagingSenderId: "722310185294",
    appId: "1:722310185294:web:361f294ea3c1c282e79e1f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage };
export default db;