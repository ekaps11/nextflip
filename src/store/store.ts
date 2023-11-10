import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useSelector, useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux/es/types";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
// import logger from "redux-logger";
import uiReducer from "./slices/uiSlice";
import userReducer from "./slices/userSlice";
import { tmdb } from "../utils/tmdb";

const rootReducer = combineReducers({
  ui: uiReducer,
  user: userReducer,
  [tmdb.reducerPath]: tmdb.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["ui"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
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
