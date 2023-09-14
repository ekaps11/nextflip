import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  AuthError,
  signOut,
  User,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTkOYhD62yZ4LxBneQkziGwz4Cr4N8InY",
  authDomain: "nextflip11.firebaseapp.com",
  projectId: "nextflip11",
  storageBucket: "nextflip11.appspot.com",
  messagingSenderId: "1099258631965",
  appId: "1:1099258631965:web:d9772dfc790a03b5fc33f4",
  measurementId: "G-Q54H56CR29",
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
export type UserAuth = User;

export const signUpWithEmail = async (
  email: string,
  password: string,
  authError: (err: string) => void
) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return user;
  } catch (e) {
    const errCode = (e as AuthError).code.slice(5).replace(/-/g, " ");

    authError(errCode);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const authState = (cb: any) => onAuthStateChanged(auth, cb);

export const login = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    console.log(e);
  }
};

export const logOut = async () => await signOut(auth);
