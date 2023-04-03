import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyC1UL9dHlJyu8cghWJI6KS6shuMrx2zSsU",
  authDomain: "tiktok---jclone.firebaseapp.com",
  projectId: "tiktok---jclone",
  storageBucket: "tiktok---jclone.appspot.com",
  messagingSenderId: "198338198417",
  appId: "1:198338198417:web:08f05dfaa974f1df4eb830"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;