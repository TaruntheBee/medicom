// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyB6oDRFLhCSBDvErDA7I2-7hgQmrGnre0k",
  authDomain: "medicom-94bd6.firebaseapp.com",
  projectId: "medicom-94bd6",
  storageBucket: "medicom-94bd6.appspot.com",
  messagingSenderId: "262837429143",
  appId: "1:262837429143:web:2307f6350086e05352dad2",
  measurementId: "G-9K16YZKCY1"
};

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';
import { getFirestore, query, getDocs, collection, where, addDoc } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try{
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q =  query(collection(db, "users"), where("uid", "==", user.uid));
        const querySnapshot = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                email: user.email,
                name: user.displayName,
                photo: user.photoURL,
                phone: user.phoneNumber,
                created: new Date(),
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
        }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createInWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            email: user.email,
            name: name,
            created: new Date(),
        });
        return user;
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const setPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logOut = async () => {
    try {
        await signOut(auth);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

export { auth, db, signInWithGoogle, logInWithEmailAndPassword, registerWithEmailAndPassword, setPasswordReset, logOut };