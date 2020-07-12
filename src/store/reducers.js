//reducers
import loginReducer from "pages/login/ducks/reducer";
import signupReducer from "pages/signup/ducks/reducer";
import profileReducer from "pages/profile/ducks/reducer";

import { firestoreReducer } from "redux-firestore"; // store synching
//authentication synching synching
import { firebaseReducer } from "react-redux-firebase";

const allReducers = {
  ...loginReducer,
  ...signupReducer,
  ...profileReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
};

export default allReducers;
