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
import "../i18n/i18n";
import i18n from "../i18n/i18n";
import { handleAuthError } from "../helper/helper";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "nextflip11.firebaseapp.com",
  projectId: "nextflip11",
  storageBucket: "nextflip11.appspot.com",
  messagingSenderId: "1099258631965",
  appId: "1:1099258631965:web:d9772dfc790a03b5fc33f4",
  measurementId: "G-Q54H56CR29",
};

const { t } = i18n;

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

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

    console.log(user);

    return user;
  } catch (e) {
    const errCode = handleAuthError((e as AuthError).code);
    const errMsg = errCode && t("error.emailExisted");

    authError(errMsg);
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
      authError(`${err}. ${err.includes("many") ? "" : t("error.tryAgain")}`);

    if (errCode === "wrong password") errMsg(t("error.wrongPassword"));
    else if (errCode === "user not found") errMsg(t("error.userNotFound"));
    else errMsg(t("error.tooManyRequests"));
  }
};

export const logOut = async () => {
  location.reload();
  await signOut(auth);
};
