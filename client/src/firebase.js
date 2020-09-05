import firebase from 'firebase/app'
import 'firebase/firebase-firestore'

var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'proven-mystery-288519.firebaseapp.com',
  databaseURL: 'https://proven-mystery-288519.firebaseio.com',
  projectId: 'proven-mystery-288519',
  storageBucket: 'proven-mystery-288519.appspot.com',
  messagingSenderId: '699269620657',
  appId: '1:699269620657:web:655ef84e396f7956e61390',
  measurementId: 'G-TV23XWSH0P',
}

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db
