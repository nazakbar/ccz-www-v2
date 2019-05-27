import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA80XeWukFJrIwmtKdzXw5n5fMgiClBPTE",
  authDomain: "concrezan-webapp.firebaseapp.com",
  databaseURL: "https://concrezan-webapp.firebaseio.com",
  projectId: "concrezan-webapp",
  storageBucket: "concrezan-webapp.appspot.com",
  messagingSenderId: "445822360903",
  appId: "1:445822360903:web:161dffb8c02f81f6"
}
firebase.initializeApp(firebaseConfig);

export default !firebase.apps.length
	? firebase.initializeApp(firebaseConfig).firestore()
	: firebase.app().firestore();

export const database = firebase.firestore();