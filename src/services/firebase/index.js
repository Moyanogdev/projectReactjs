
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBhWmswAhwVVsTyQ9lepva7MlZ5NyfMTkI",
  authDomain: "backendhardfire.firebaseapp.com",
  projectId: "backendhardfire",
  storageBucket: "backendhardfire.appspot.com",
  messagingSenderId: "937257999259",
  appId: "1:937257999259:web:951404d8fbebf84af65f3e"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);