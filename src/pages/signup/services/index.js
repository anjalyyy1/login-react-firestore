import { get } from "lodash";

// import actions
import {
  onUserSignupSuccess,
  isUserLoading,
  onUserSignupFailure
} from "./actions";

// user login handler
const userSignupHandler = newUser => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  dispatch(
    isUserLoading({
      isUserLoading: true
    })
  );

  console.log("i m from services");
  firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(response => {
      const user = response.user;

      let test = firestore.collection("users").doc(user.uid).set({
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        age: newUser.age,
        phoneNumber: newUser.phoneNumber,
        address: newUser.address
      });
      console.log(test, "===");
      return test;
    })
    .then(response => {
      dispatch(
        onUserSignupSuccess({
          userDetails: response
        })
      );
    })
    .catch(err => {
      console.log("object", err);
      dispatch(
        onUserSignupFailure({
          signupError: err
        })
      );
    });
  dispatch(
    isUserLoading({
      isUserLoading: false
    })
  );
};

export { userSignupHandler };
