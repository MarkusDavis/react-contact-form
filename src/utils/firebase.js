import firebase from "firebase";

const config = {
	apiKey: "AIzaSyBubIBDm7MZLoDYqHDWHnmda_k9-GyLmcw",
	authDomain: "verifiedaccounts.firebaseapp.com",
	databaseURL: "https://verifiedaccounts-default-rtdb.firebaseio.com",
	projectId: "verifiedaccounts",
	storageBucket: "verifiedaccounts.appspot.com",
	messagingSenderId: "717887854791",
	appId: "1:717887854791:web:1801b1988b086a443b86e2",
	measurementId: "G-5DY20PFWWV"
};
firebase.initializeApp(config);

export default firebase;
