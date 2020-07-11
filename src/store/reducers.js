//reducers
import loginReducer from "pages/login/services/reducer";
import signupReducer from "pages/signup/services/reducer";
import profileReducer from "pages/profile/services/reducer";

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

// const rootReducer = combineReducers({
// });

export default allReducers;
