import {initializeApp} from "firebase/app";
import {getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth"
import {getFirestore, enableIndexedDbPersistence, onSnapshot, collection} from 'firebase/firestore'

initializeApp({
    apiKey: "",
    authDomain: "",
    projectId: ""
});

const AUTH = getAuth()
export const listenUser = (callback) => onAuthStateChanged(AUTH, callback)
export const signIn = () => {return signInWithPopup(AUTH, new GoogleAuthProvider())}
export const logOut = () => {return signOut(AUTH)}

const FIRESTORE = getFirestore()
enableIndexedDbPersistence(FIRESTORE).catch(e => console.log(e.code === 'failed-precondition' ? 'Multiple Tabs Open' : 'Cant Cache ', e))

export const listenData = (path, callback) => {
    return onSnapshot(collection(FIRESTORE, path), callback)
}