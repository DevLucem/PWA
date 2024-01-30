import {initializeApp} from "firebase/app";
import {getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth"
import {initializeFirestore, persistentLocalCache, onSnapshot, collection} from 'firebase/firestore'
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const app = initializeApp({ // Add your project config here
});

const messaging = getMessaging(app);

getToken(messaging, {vapidKey: "BPrm1I76J6z4vX0WNNyDSZ2jzPmF6k6LeCOXyH6ts9WNdihqQ6YTLD2v38jObtyjxdDMQuxMZfq5wm_PcNRAFLA"}).then(console.log);
onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);

});

// const notificationPermission = () => {
//     Notification.requestPermission().then((permission) => {
//         if (permission === 'granted') {
//             console.log('Notification permission granted.');
//             // TODO(developer): Retrieve a registration token for use with FCM.
//             // ...
//         } else {
//             console.log('Unable to get permission to notify.');
//         }
//     });
// }



const AUTH = getAuth();

export const listenUser = (callback) => onAuthStateChanged(AUTH, callback)
export const signIn = () => {return signInWithPopup(AUTH, new GoogleAuthProvider())}
export const logOut = () => {return signOut(AUTH)}



const FIRESTORE = initializeFirestore(app, {localCache: persistentLocalCache()})

export const listenData = (path, callback) => {
    return onSnapshot(collection(FIRESTORE, path), callback)
}