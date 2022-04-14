import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore'
import { FIREBASE_CONFIG } from "./KEYS";
/*** ./KEYS.js File
 * export const FIREBASE_CONFIG = {
 *     apiKey: "",
 *     authDomain: "",
 *     projectId: ""
 * }
 * */

initializeApp(FIREBASE_CONFIG);

const AUTH = getAuth()
export const listenUser = (callback) => onAuthStateChanged(AUTH, callback)
export const signIn = () => {return signInWithPopup(AUTH, new GoogleAuthProvider())}
export const logOut = () => {return signOut(AUTH)}

const FIRESTORE = getFirestore()
enableIndexedDbPersistence(FIRESTORE).catch(e => console.log(e.code  === 'failed-precondition' ? 'Multiple Tabs Open' : 'Cant Cache ', e))