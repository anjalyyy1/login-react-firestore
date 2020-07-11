import { get } from "lodash";
import ToastUtils from "utils/handleToast";

// import actions
import {
  onUserLoginSuccess,
  isUserLoading,
  onUserLoginFailure
} from "./actions";

// user login handler
const userLoginhandler = (email, password) => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();

  dispatch(
    isUserLoading({
      isUserLoading: true
    })
  );

  // firebase.auth().signInWithEmailAndPassword(
  //   credentials.email,
  //   credentials.password
  // ).then(() => {
  //   dispatch({ type: 'LOGIN_SUCCESS' });
  // }).catch((err) => {
  //   dispatch({ type: 'LOGIN_ERROR', err });
  // });

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log("resolved");
      dispatch(
        isUserLoading({
          isUserLoading: false
        })
      );
    })
    .catch(err => {
      dispatch(
        isUserLoading({
          isUserLoading: false
        })
      );
      console.log("not resolved", err.message);
      ToastUtils.handleToast({
        operation: "error",
        message: err.message
      });
    });

  // try {
  //   const response = await firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password);

  //   // if (get(response, `user`)) {
  //   //   dispatch(
  //   //     onUserLoginSuccess({
  //   //       userProfileDetails: response.user
  //   //     })
  //   //   );
  //   // } else {
  //   //   dispatch(
  //   //     onUserLoginFailure({
  //   //       loginError: response
  //   //     })
  //   //   );
  //   // }
  // } catch (err) {
  //   // ToastUtils.handleToast({
  //   //   operation: "error",
  //   //   message: err.message
  //   // });
  //   dispatch(
  //     isUserLoading({
  //       isUserLoading: false
  //     })
  //   );
  // }
};

export { userLoginhandler };
