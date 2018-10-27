import firebase from 'firebase/app';
import 'firebase/database';
export const database = firebase.database; 
const config = {
    apiKey: "AIzaSyDedbEHnJ3ubc4wIvc0837PogKrtpaNJPc",
    authDomain: "chris-rohr.firebaseapp.com",
    databaseURL: "https://chris-rohr.firebaseio.com",
    projectId: "chris-rohr",
    storageBucket: "chris-rohr.appspot.com",
    messagingSenderId: "547803244025"
};
firebase.initializeApp(config);