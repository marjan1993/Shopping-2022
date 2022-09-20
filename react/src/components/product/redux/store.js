import { combineReducers, applyMiddleware, legacy_createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { cartReducer } from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "persist-key",
  storage,
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ cart: cartReducer })
);
export const cartStore = legacy_createStore(
  persistedReducer,
  applyMiddleware(ReduxThunk)
);
export const persistor = persistStore(cartStore);
