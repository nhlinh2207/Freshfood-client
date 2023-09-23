// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyCt6-1wELxeIwLRDmMr5yF-wysX_rWSpMs",
    authDomain: "spring-firebase-fcm.firebaseapp.com",
    projectId: "spring-firebase-fcm",
    storageBucket: "spring-firebase-fcm.appspot.com",
    messagingSenderId: "645957630945",
    appId: "1:645957630945:web:04da52bf0c288f779670a0",
    measurementId: "G-F1C9PVLJBD"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: '/favicon.ico'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
});