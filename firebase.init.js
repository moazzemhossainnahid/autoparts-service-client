// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtPVeUlrqmSHG8KwQBPpyaXwCey03d010",
    authDomain: "autoparts-services.firebaseapp.com",
    projectId: "autoparts-services",
    storageBucket: "autoparts-services.appspot.com",
    messagingSenderId: "351334909423",
    appId: "1:351334909423:web:b8af2bd4c2b5372f58a21a"
};
    
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 