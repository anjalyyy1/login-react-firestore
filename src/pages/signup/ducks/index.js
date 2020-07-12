import ToastUtils from "utils/handleToast";
import { storage } from "config/firebaseConfig";

// import actions
import {
  onUserSignupSuccess,
  isUserLoading,
  onUserSignupFailure
} from "./actions";
import { get } from "lodash";

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

  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password);

    // get the image url for the image
    const uploadedImage = await storage
      .ref(`/images/${newUser.profilePicture.name}`)
      .put(newUser.profilePicture);

    const imageUrl = await storage
      .ref("images")
      .child(uploadedImage.metadata.name)
      .getDownloadURL();

    await firestore.collection("users").doc(response.user.uid).set({
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      age: newUser.age,
      phoneNumber: newUser.phoneNumber,
      address: newUser.address,
      profilePicture: imageUrl
    });

    dispatch(
      onUserSignupSuccess({
        isUserSignedUp: true
      })
    );

    ToastUtils.handleToast({
      operation: "success",
      message: "Account created successfully. Welcome!!"
    });
  } catch (err) {
    dispatch(
      onUserSignupFailure({
        signupError: err
      })
    );
    ToastUtils.handleToast({
      operation: "error",
      message: get(err, "message") || "Something went wrong."
    });
  }

  dispatch(
    isUserLoading({
      isUserLoading: false
    })
  );
};

export { userSignupHandler };
