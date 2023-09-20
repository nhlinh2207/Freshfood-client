import { initializeApp } from "firebase/app";
import { getMessaging, getToken  } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCt6-1wELxeIwLRDmMr5yF-wysX_rWSpMs",
  authDomain: "spring-firebase-fcm.firebaseapp.com",
  projectId: "spring-firebase-fcm",
  storageBucket: "spring-firebase-fcm.appspot.com",
  messagingSenderId: "645957630945",
  appId: "1:645957630945:web:04da52bf0c288f779670a0",
  measurementId: "G-F1C9PVLJBD"
};

const vapidKey = 'BG3FmTLynMjAwfZH3dq3UsxzoZbxCnDVRuyjIkMCzD0V7P1iA0WVHhBrVvCPtyEneyw5cgL3S6Zv_pgkn0NDSnI'

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
// onMessage(messaging, (payload) => {
//     console.log('Message received. ', payload);
//     // ...
// });

export function getFCMToken(){
  getToken(messaging, { vapidKey: vapidKey })
    .then((currentToken) => {
      if (currentToken) {
        console.log(currentToken)
      } else {
        alert('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
      alert('An error occurred while retrieving token. ', err);
    });
}

 