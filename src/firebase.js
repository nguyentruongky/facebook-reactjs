import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyCoqCR_oFEeTVrRgcIr21D0pdRldoCSB2A',
    authDomain: 'facebook-clone-79c3b.firebaseapp.com',
    projectId: 'facebook-clone-79c3b',
    storageBucket: 'facebook-clone-79c3b.appspot.com',
    messagingSenderId: '587936808074',
    appId: '1:587936808074:web:fcc7f9754b1431815e4173',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export { auth, provider }
export default db
