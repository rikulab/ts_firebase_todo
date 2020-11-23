import * as firebase from "firebase/app";
import "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBVcH_b5wS-P4ugnxM-tJhl3Eq8ILfDZCw",
    authDomain: "fir-todo-d0471.firebaseapp.com",
    databaseURL: "https://fir-todo-d0471.firebaseio.com",
    projectId: "fir-todo-d0471",
    storageBucket: "fir-todo-d0471.appspot.com",
    messagingSenderId: "797895360281",
    appId: "1:797895360281:web:cdad714978235aa04f8f88"
});

export const db = firebaseApp.firestore();
export const auth = firebase.auth();