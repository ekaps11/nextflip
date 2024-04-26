import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useSelector, useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux/es/types";
import { persistReducer, persistStore } from "redux-persist";
import movieReducer from "./slices/movieSlice";
import userReducer from "./slices/userSlice";
import persistingReducer from "./slices/persistedSlice";
import { tmdb } from "../utils/tmdb";
import storage from "redux-persist/lib/storage";
// import localforage from "localforage";
// import logger from "redux-logger";

const rootReducer = combineReducers({
  user: userReducer,
  persisted: persistingReducer,
  movie: movieReducer,
  [tmdb.reducerPath]: tmdb.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["movie"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.MODE !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(tmdb.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
