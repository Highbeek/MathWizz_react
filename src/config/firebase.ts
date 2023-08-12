import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
  setPersistence,
  browserLocalPersistence,
  signOut,
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
setPersistence(auth, browserLocalPersistence);

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

export const signOutWithGoogle = () => {
  signOut(auth)
    .then(() => {
      // Clear local storage or any other cleanup
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("profilePic");
      console.log("User signed out successfully.");
      window.location.href = "/";
    })
    .catch((error) => {
      console.error("Sign-out error:", error);
      // Handle the sign-out error
    });
};
