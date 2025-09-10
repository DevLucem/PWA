import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig.json";
const app = initializeApp(firebaseConfig);


import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const AUTH = getAuth(app);
export const authListener = (callback) => onAuthStateChanged(AUTH, callback);
export const signIn = () => signInWithPopup(AUTH, new GoogleAuthProvider());
export const signOut = () => AUTH.signOut();


import { initializeFirestore, persistentLocalCache, onSnapshot, collection, addDoc } from "firebase/firestore";
const FIRESTORE = initializeFirestore(app, {localCache: persistentLocalCache()});
export const listenData = (path, callback) => onSnapshot(collection(FIRESTORE, path), callback);
export const addData = (path, data) => addDoc(collection(FIRESTORE, path), data);


import { getMessaging, getToken } from "firebase/messaging";
export const isSupported = () => 'Notification' in window && 'serviceWorker' in navigator && 'PushManager' in window
const MESSAGING = isSupported() ? getMessaging(app) : null;
export const sendNotification = () => {
    if (isSupported()) {
        if (confirm("Are you sure you want to test notifications?")) {
            if (Notification.permission !== "denied") {
                // Get service worker registration
                navigator.serviceWorker.ready.then(registration => {
                    getToken(MESSAGING, { vapidKey: firebaseConfig.vapidKey, serviceWorkerRegistration: registration })
                        .then(token => {
                            alert("Notification token created. Sending test notification...\n\n" + token);
                            fetch("/notify", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ token, title: "Test Notification", body: "This is a test notification from Firebase Cloud Messaging." })
                            }).then(res => console.log("Notification sent:", res)).catch(console.error);
                        })
                });
            } else alert("Notification permission denied. Please enable it in your browser settings.");
        }
    } else alert("This browser does not support notifications.");
}

