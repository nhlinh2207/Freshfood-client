import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCt6-1wELxeIwLRDmMr5yF-wysX_rWSpMs",
  authDomain: "spring-firebase-fcm.firebaseapp.com",
  projectId: "spring-firebase-fcm",
  storageBucket: "spring-firebase-fcm.appspot.com",
  messagingSenderId: "645957630945",
  appId: "1:645957630945:web:04da52bf0c288f779670a0",
  measurementId: "G-F1C9PVLJBD"
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export async function getFCMToken(){
  return new Promise((resolve, reject) => {
    getToken(messaging, { vapidKey: 'BG3FmTLynMjAwfZH3dq3UsxzoZbxCnDVRuyjIkMCzD0V7P1iA0WVHhBrVvCPtyEneyw5cgL3S6Zv_pgkn0NDSnI' })
    .then((currentToken) => {
      if (currentToken) {
        // console.log(currentToken)
        return resolve(currentToken)
      } else {
        console.error('No registration token available. Request permission to generate one.');
        return ''
      }
    }).catch((err) => {
       console.error('An error occurred while retrieving token. ', err);
       return reject(err)
    });
  })
}

 