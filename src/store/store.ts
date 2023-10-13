import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux/es/types";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
// import logger from "redux-logger";
import uiReducer from "./slices/uiSlice";
import userReducer from "./slices/userSlice";

const rootReducer = combineReducers({
  ui: uiReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }), //.concat(logger),
});

persistStore(store);

console.log(store.getState().ui.lngContent);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
