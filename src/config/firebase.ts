import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDocs,
  getDoc,
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTORE_API,
  authDomain: "mathwizz-3ac9d.firebaseapp.com",
  projectId: "mathwizz-3ac9d",
  storageBucket: "mathwizz-3ac9d.appspot.com",
  messagingSenderId: "487805329592",
  appId: "1:487805329592:web:195fa95f15765afd1e544d",
  measurementId: "G-N8P859PWGD",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async (userProfile: string | null, selectedAvatar: string | null) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const name = user.displayName;
    const email = user.email;
    const profilePic = user.photoURL;

    const userDocRef = doc(db, "users", user.uid);

    const userDocSnapshot = await getDoc(userDocRef);
    const existingUsername = userDocSnapshot.data()?.username;

    if (existingUsername) {
      window.location.href = "/user";
      return;
    }
    const usernameToCheck = userProfile || "";

    const usernameQuerySnapshot = await getDocs(collection(db, "users"));
    const usernames = usernameQuerySnapshot.docs.map(
      (doc) => doc.data().username
    );

    if (usernames.includes(usernameToCheck)) {
      // Username is already taken, notify the user
      console.error("Username is already taken.");
      return;
    }

    // Store user information in Firestore, including context values
    await setDoc(userDocRef, {
      name: name || "",
      email: email || "",
      profilePic: profilePic || "",
      username: usernameToCheck,
      avatar: selectedAvatar || "",
    });

    window.location.href = "/profile";
  } catch (error) {
    console.error("Google sign-in error:", error);
  }
};


export const signOutWithGoogle = () => {
  signOut(auth)
    .then(() => {
      console.log("User signed out successfully.");
      window.location.href = "/";
    })
    .catch((error) => {
      console.error("Sign-out error:", error);
    });
};


// ...

export const updateScore = async (userId, score, timestamp) => {
  try {
    const userScoreDocRef = doc(db, "userscore", userId);

    // Get the current user's score document
    const userScoreDocSnapshot = await getDoc(userScoreDocRef);
    const existingScoreData = userScoreDocSnapshot.exists()
      ? userScoreDocSnapshot.data()
      : {};

    // Prepare the new score data
    const newScoreData = {
      score,
      timestamp,
    };

    // If there's existing score data, update it
    if (existingScoreData) {
      const scores = existingScoreData.scores || [];
      scores.push(newScoreData);

      // Update the scores array in the existing user's score document
      await setDoc(userScoreDocRef, { scores }, { merge: true });
    } else {
      // If there's no existing score data, create a new document
      await setDoc(userScoreDocRef, { scores: [newScoreData] });
    }

    console.log("Score updated successfully.");
  } catch (error) {
    console.error("Error updating score:", error);
  }
};

// ...

