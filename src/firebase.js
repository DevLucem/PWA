import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"
initializeApp({
    apiKey: "",
    projectId: "",
    authDomain: ""
});

const AUTH = getAuth()
export const listenUser = (callback) => onAuthStateChanged(AUTH, callback)
export const signIn = () => {return signInWithPopup(AUTH, new GoogleAuthProvider())}
export const logOut = () => {return signOut(AUTH)}