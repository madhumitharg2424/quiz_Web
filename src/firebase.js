import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc
} from "firebase/firestore";

// 🔐 Firebase config from .env
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// ✅ Initialize Firebase App
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

// ✅ Initialize Firebase Services
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// 🔹 Google Sign-In
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // ✅ Save to localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      })
    );

    // ✅ Save to Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      lastLogin: new Date(),
    });

    console.log("User signed in and saved:", user);
  } catch (error) {
    if (error.code === "auth/popup-closed-by-user") {
      console.log("User closed the popup without signing in.");
    } else {
      console.error("Google Sign-In Error:", error.code, error.message);
    }
  }
};

// 🔹 Logout
export const logout = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("user");
    window.location.href = "/login";
  } catch (error) {
    console.error("Logout Error:", error.code, error.message);
  }
};

export { auth, db };
