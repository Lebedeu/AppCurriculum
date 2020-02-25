import firebase from '@firebase/app/';
import '@firebase/auth';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyCWzhnRoUhBDan4fVT0RM1zwSdDAeXS2eo",
  authDomain: "curriculumapp-83564.firebaseapp.com",
  databaseURL: "https://curriculumapp-83564.firebaseio.com",
  projectId: "curriculumapp-83564",
  storageBucket: "curriculumapp-83564.appspot.com",
  messagingSenderId: "535976718288",
  appId: "1:535976718288:web:9a71d5f1a10a719b8793d5",
  measurementId: "G-PBE9BDJ0WQ"
//   };
// // Initialize Firebase
// if ( !firebase.apps.length ) {
//   firebase.initializeApp(firebaseConfig);
// }
// // firebase.analytics();
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
