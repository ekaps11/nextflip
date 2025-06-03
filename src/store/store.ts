import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useSelector, useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux/es/types";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "./slices/userSlice";
import uiReducer from "./slices/uiSlice";
import { tmdb } from "../api/tmdb";
import { firestore } from "../api/firestore";
// import logger from "redux-logger";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["tmdb"],
};

const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
  [tmdb.reducerPath]: tmdb.reducer,
  [firestore.reducerPath]: firestore.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [tmdb.middleware, firestore.middleware];

export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.MODE !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(...[middlewares]),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
