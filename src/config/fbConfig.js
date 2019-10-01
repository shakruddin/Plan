import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAbpAo0DNoMZtmdOqx0HjqhWKxow0zWa8g",
    authDomain: "plan-f1d4e.firebaseapp.com",
    databaseURL: "https://plan-f1d4e.firebaseio.com",
    projectId: "plan-f1d4e",
    storageBucket: "plan-f1d4e.appspot.com",
    messagingSenderId: "642835789445",
    appId: "1:642835789445:web:8ad839915db03429f85bec",
    measurementId: "G-9EQ1H0WG2P"
};

firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 
