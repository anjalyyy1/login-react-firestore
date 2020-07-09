import { get } from "lodash";

// import actions
import {
  onUserLoginSuccess,
  isUserLoading,
  onUserLoginFailure
} from "./actions";

// user login handler
const userLoginhandler = (
  email = "test@test.com",
  password = "123456A"
) => async (dispatch, getState, { getFirebase }) => {
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

    if (get(response, `user`)) {
      dispatch(
        onUserLoginSuccess({
          userProfileDetails: response.user
        })
      );
    } else {
      dispatch(
        onUserLoginFailure({
          loginError: response
        })
      );
    }
  } catch (err) {
    dispatch(
      isUserLoading({
        isUserLoading: false
      })
    );
  }
};

export { userLoginhandler };
