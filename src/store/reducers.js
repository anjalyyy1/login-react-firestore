import { combineReducers } from "redux";

//reducers
import loginReducer from "pages/login/services/reducer";
import { firestoreReducer } from "redux-firestore"; // store synching
//authentication synching synching
import { firebaseReducer } from "react-redux-firebase";

const allReducers = {
  ...loginReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
};

// const rootReducer = combineReducers({
// });

export default allReducers;
