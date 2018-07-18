import * as firebase from "firebase";

export const initialize = () => firebase.initializeApp({
    apiKey: "AIzaSyBm9uXYiXVWF3alEARCCk8uwdrTGEw5sCo",
    authDomain: "whatsappclone-a9826.firebaseapp.com",
    databaseURL: "https://whatsappclone-a9826.firebaseio.com",
    projectId: "whatsappclone-a9826",
    storageBucket: "whatsappclone-a9826.appspot.com",
    messagingSenderId: "361257948008"
})


export const setListener = (endpoint, updaterFn) => {
    firebase.database().ref(endpoint).on('value', updaterFn);
    return () => firebase.database().ref(endpoint).off();
}

export const pushData = (endpoint, data) => {
  return firebase.database().ref(endpoint).push(data);
}