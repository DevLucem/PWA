import {initializeApp} from "firebase/app";
import {getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth"
import {initializeFirestore, persistentLocalCache, onSnapshot, collection} from 'firebase/firestore'
import { getMessaging, getToken, isSupported } from "firebase/messaging";

import firebaseConfig from "./firebaseConfig.json";
const app = initializeApp(firebaseConfig);


export const setupNotifications = registration => {
    console.log("Service Worker Registered. Connecting Notifications...");
    isSupported().then(supported => {
        if (supported) getToken(getMessaging(app), {
                vapidKey: firebaseConfig.vapidKey,
                serviceWorkerRegistration: registration
            }).then(token => {
                console.log('Token:', token);
                fetch('/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({token: token, topic: 'all'})
                }).then(res => {
                    console.log('Sent token to server', res);
                }).catch(console.error);
            }).catch(console.error);
    })
}

export const testNotification = () => {
    if (confirm("Send Test?"))
        fetch('/notify', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/html',
                'Accept': 'application/json'
            },
            body: 'Wohoo! This is a Test Notification'
        }).then(res => {
            console.log('Sent test notification', res);
        }).catch(console.error);
}


const AUTH = getAuth();

export const listenUser = (callback) => onAuthStateChanged(AUTH, callback)
export const signIn = () => {return signInWithPopup(AUTH, new GoogleAuthProvider())}
export const logOut = () => {return signOut(AUTH)}


const FIRESTORE = initializeFirestore(app, {localCache: persistentLocalCache()})

export const listenData = (path, callback) => {
    return onSnapshot(collection(FIRESTORE, path), callback)
}