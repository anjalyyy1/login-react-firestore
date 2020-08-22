import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { compose } from "redux";
import {
  reduxFirestore,
  getFirestore,
  createFirestoreInstance
} from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import firebase from "firebase/app";
import firebaseConfig from "../config/firebaseConfig";

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, //include if using firestore so that profile is populated with user details
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

export default function configureStore() {
  return store;
}

export { store, rrfProps };
