import * as firebase from 'firebase'
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'team-f5c1b.firebaseapp.com',
  databaseURL: 'https://team-f5c1b.firebaseio.com',
  projectId: 'team-f5c1b',
  storageBucket: '',
  messagingSenderId: '726074932355',
  appId: '1:726074932355:web:174cc778d39aec9d'
}
firebase.initializeApp(config)

export const database = firebase.database().ref('posts/')
