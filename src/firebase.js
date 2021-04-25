import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyB6QDcZgP_KZC-wOLmTnZzhlRbKd2F9bVI",
    authDomain: "disneyplus-cf716.firebaseapp.com",
    projectId: "disneyplus-cf716",
    storageBucket: "disneyplus-cf716.appspot.com",
    messagingSenderId: "687148010475",
    appId: "1:687148010475:web:18df2873e67e3d141e67ae",
    measurementId: "G-LPQ5W2DVNM"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
