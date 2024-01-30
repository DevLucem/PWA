import {initializeApp} from "firebase/app";
import {getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth"
import {getFirestore, initializeFirestore, persistentLocalCache, enableIndexedDbPersistence, onSnapshot, collection} from 'firebase/firestore'

const app = initializeApp({
    apiKey: "AIzaSyAszwtAp84pQ_aG6I0kxfxadaFX78zoSTc",
    authDomain: "devlucem.firebaseapp.com",
    projectId: "devlucem",
    storageBucket: "devlucem.appspot.com",
    messagingSenderId: "510633259772",
    appId: "1:510633259772:web:61e75c31cdbd79488a1d79",
    measurementId: "G-NN195Z11MF"
});

const AUTH = getAuth()
export const listenUser = (callback) => onAuthStateChanged(AUTH, callback)
export const signIn = () => {return signInWithPopup(AUTH, new GoogleAuthProvider())}
export const logOut = () => {return signOut(AUTH)}

const FIRESTORE = initializeFirestore(app, {localCache: persistentLocalCache()})

export const listenData = (path, callback) => {
    return onSnapshot(collection(FIRESTORE, path), callback)
}