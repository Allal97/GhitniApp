import { config } from "./firebaseConfig";
import firebase from "firebase";


 // Initialize Firebase
 firebase.initializeApp(config);
const messaging = firebase.messaging();

Notification.requestPermission()
  .then((permission)=>{
      console.log("Permission granted", permission);
  })
  .catch((err)=>{
      console.log("An Error has occured", err);
  })