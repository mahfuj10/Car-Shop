import firebaseConfig from "./FirebaseConfig";
import { initializeApp } from "firebase/app";

const firebaseInitalize = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInitalize;