import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
const ENCRYPTION_KEY = import.meta.env.VITE_APP_REDUX_ENCRYPTION_KEY;

// Import your reducers
import authReducer from "./slices/authSlices.jsx";

// Combine reducers
const rootReducer = combineReducers({
  authDetails: authReducer,
});

// Configure persist with encryption
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["authDetails"],
  transforms: [
    encryptTransform({
      secretKey: ENCRYPTION_KEY, // Replace with a strong key
      onError: function (error) {
        console.error("Encryption error:", error);
      },
    }),
  ],
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Ignore non-serializable warnings
    }),
});

// Create persistor
export const persistor = persistStore(store);
