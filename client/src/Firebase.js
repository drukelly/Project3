import * as firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyBgbPZm6WbepGHGtFW1Sw-w5O2IaurV3z4',
  authDomain: 'team-f5c1b.firebaseapp.com',
  databaseURL: 'https://team-f5c1b.firebaseio.com',
  projectId: 'team-f5c1b',
  storageBucket: '',
  messagingSenderId: '726074932355',
  appId: '1:726074932355:web:174cc778d39aec9d'
}
firebase.initializeApp(config)

export const database = firebase.database().ref('posts/')
