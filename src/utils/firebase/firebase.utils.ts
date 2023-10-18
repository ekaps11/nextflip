import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  AuthError,
  signOut,
} from "firebase/auth";
import "../../i18n";

const firebaseConfig = {
  apiKey: "AIzaSyCTkOYhD62yZ4LxBneQkziGwz4Cr4N8InY",
  authDomain: "nextflip11.firebaseapp.com",
  projectId: "nextflip11",
  storageBucket: "nextflip11.appspot.com",
  messagingSenderId: "1099258631965",
  appId: "1:1099258631965:web:d9772dfc790a03b5fc33f4",
  measurementId: "G-Q54H56CR29",
};

initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();

const handleAuthError = (word: string) => word.slice(5).replace(/-/g, " ");

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
    const errCode = handleAuthError((e as AuthError).code);

    authError(errCode);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getUser = (cb: any) => onAuthStateChanged(auth, cb);

export const login = async (
  email: string,
  password: string,
  authError: (err: string) => void
) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    return user;
  } catch (e) {
    const errCode = handleAuthError((e as AuthError).code);

    const errMsg = (err: string) =>
      authError(
        `${err}. ${err.includes("many") ? "" : "Please try again or you can "}`
      );

    if (errCode === "wrong password") errMsg("Incorrect password");
    else if (errCode === "user not found") errMsg("User not found");
    else errMsg("Too many requests");
  }
};

export const logOut = async () => await signOut(auth);
