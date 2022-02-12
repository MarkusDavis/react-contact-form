import firebase from "firebase";

const config = {
	apiKey: "AIzaSyDqSXUrM5EOAt3YjFBP1666zVPACg3bhmE",
	authDomain: "markus-davis.firebaseapp.com",
	databaseURL: "https://markus-davis-default-rtdb.firebaseio.com",
	projectId: "markus-davis",
	storageBucket: "markus-davis.appspot.com",
	messagingSenderId: "38892633916",
	appId: "1:38892633916:web:0ec22f503b418e161ae839",
	measurementId: "G-EPEXK1NVSD" 
};
firebase.initializeApp(config);

export default firebase;
