import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyBtrgib_Xa7BJqKxvG0SBjdRB8HfzcxEVs",
  authDomain: "personaldiary-9aec1.firebaseapp.com",
  databaseURL: "https://personaldiary-9aec1.firebaseio.com",
  projectId: "personaldiary-9aec1",
  storageBucket: "personaldiary-9aec1.appspot.com",
  messagingSenderId: "519047931596"
};
firebase.initializeApp(config);

var database = firebase.database();

export var User = {};

export function auth () {
  return new Promise(function (resolve, reject) {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        User.user = result.user;
        resolve(User);
      })
      .catch(function (e) {
        reject(e);
      });
  });
}



export default database;
