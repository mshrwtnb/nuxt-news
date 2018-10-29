import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DB_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  }

  firebase.initializeApp(config)
  firebase.firestore().settings({
    timestampsInSnapshots: true,
  })
}

const db = firebase.firestore()

export default db
