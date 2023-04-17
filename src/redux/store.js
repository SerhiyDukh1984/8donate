import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import donateReducer from "./donate/donateSlice";
import donateBlockReducer from "./donateBlock/donateBlockSlice";
import subscriptionBlockReducer from "./SubscriptionBlock/SubscriptionBlockSlice";
import trackingBlockReducer from "./TrackingBlock/TrackingBlockSlice";
import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const authPersistConfig = {
  key: "auth",
  storage,
};

const donatePersistConfig = {
  key: "donate",
  storage,
};

const donateBlockPersistConfig = {
  key: "donateBlock",
  storage,
};

const subscriptionBlockPersistConfig = {
  key: "subscriptionBlock",
  storage,
};

const trackingBlockPersistConfig = {
  key: "trackingBlock",
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    donate: persistReducer(donatePersistConfig, donateReducer),
    donateBlock: persistReducer(donateBlockPersistConfig, donateBlockReducer),
    trackingBlock: persistReducer(
      trackingBlockPersistConfig,
      trackingBlockReducer
    ),
    subscriptionBlock: persistReducer(
      subscriptionBlockPersistConfig,
      subscriptionBlockReducer
    ),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
