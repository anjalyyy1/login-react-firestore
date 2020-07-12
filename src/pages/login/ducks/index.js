import { get } from "lodash";
import ToastUtils from "utils/handleToast";

// import actions
import { onUserLoginSuccess, isUserLoading } from "./actions";

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

  try {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    dispatch(
      isUserLoading({
        isUserLoading: false
      })
    );

    dispatch(
      onUserLoginSuccess({
        userProfileDetails: get(response, `user`)
      })
    );
  } catch (err) {
    dispatch(
      isUserLoading({
        isUserLoading: false
      })
    );
    ToastUtils.handleToast({
      operation: "error",
      message: err.message
    });
  }
};

export { userLoginhandler };
