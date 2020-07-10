import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
// import { persistStore, persistReducer } from "redux-persist";
// TODO: store to be added
// import storage from "redux-persist/lib/storage";
// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["LAST_LOGGED_IN_TOOL"]
// };
// const persistedReducer = persistReducer(persistConfig, reducerList);

import { compose } from "redux";
import {
  reduxFirestore,
  getFirestore,
  createFirestoreInstance
} from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import firebase from "firebase/app";
import firebaseConfig from "config/firebaseConfig";

const rrfConfig = {
  // userProfile: "users",
  useFirestoreForProfile: true, //include if using firestore
  attachAuthIsReady: true //include if using firebase auth
};
const reducerList = combineReducers(reducers);

let store = createStore(
  reducerList,
  compose(
    applyMiddleware(
      thunk.withExtraArgument({
        getFirebase,
        getFirestore
      })
    ),
    reduxFirestore(firebaseConfig)
  )
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

// let persistor = persistStore(store);
export default function configureStore() {
  return store;
}
export { store, rrfProps };
