import firebase from 'firebase'

firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_VUE_APP_FIREBASE_PROJECT_ID,
  messagingSenderId:
    process.env.VUE_APP_FIREBASE_VUE_APP_FIREBASE_STORAGE_BUCKET,
})

export default firebase
