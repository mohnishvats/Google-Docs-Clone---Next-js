import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCKth6Qu0f3f2n4INv988g9-bP4Q33yw1M",
  authDomain: "docs-clone-nextjs-642d1.firebaseapp.com",
  projectId: "docs-clone-nextjs-642d1",
  storageBucket: "docs-clone-nextjs-642d1.appspot.com",
  messagingSenderId: "263560836067",
  appId: "1:263560836067:web:ebb41cc71e51f1ab36e6d6",
  measurementId: "G-60SS8065SB",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
