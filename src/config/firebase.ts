// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC0d3sVQ9vWH8rcGtiU3yzsFKzn5chRnzQ",
  authDomain: "mathwizz-3ac9d.firebaseapp.com",
  projectId: "mathwizz-3ac9d",
  storageBucket: "mathwizz-3ac9d.appspot.com",
  messagingSenderId: "487805329592",
  appId: "1:487805329592:web:195fa95f15765afd1e544d",
  measurementId: "G-N8P859PWGD",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result: UserCredential) => {
      // Extract user information from the result
      const user = result.user;
      const name = user.displayName;
      const email = user.email;
      const profilePic = user.photoURL;

      localStorage.setItem("name", name || "");
      localStorage.setItem("email", email || "");
      localStorage.setItem("profilePic", profilePic || "");
      console.log(result);
      window.location.href = "/profile";
    })
    .catch((error) => {
      console.error("Google sign-in error:", error);
    });
};
