import { get } from "lodash";
import ToastUtils from "utils/handleToast";

// import actions
import { isUserLoading, onUserUpdateFailure } from "./actions";

import { storage } from "config/firebaseConfig";

const updateUserDocument = (updatedUser, userId) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  dispatch(
    isUserLoading({
      isUserLoading: true
    })
  );

  let imageUrl;

  // if profile picture was edited get a new download url
  if (typeof updatedUser.profilePicture === "object") {
    try {
      const uploadedImage = await storage
        .ref(`/images/${updatedUser.profilePicture.name}`)
        .put(updatedUser.profilePicture);

      imageUrl = await storage
        .ref("images")
        .child(uploadedImage.metadata.name)
        .getDownloadURL();
    } catch (err) {
      dispatch(
        isUserLoading({
          isUserLoading: false
        })
      );

      return;
    }
  }

  // if new image was generated use the new image store the new image url or else the old one
  let postData = {
    ...updatedUser,
    profilePicture:
      typeof updatedUser.profilePicture === "object"
        ? imageUrl
        : get(updatedUser, `profilePicture`)
  };

  const firestore = getFirestore();
  const userRef = firestore.doc(`users/${userId}`);
  const snapshot = await userRef.get();
  dispatch(
    isUserLoading({
      isUserLoading: false
    })
  );
  if (snapshot.exists) {
    try {
      await userRef.update({
        ...postData
      });

      ToastUtils.handleToast({
        operation: "success",
        message: "Your details updated successfully."
      });
    } catch (error) {
      dispatch(
        onUserUpdateFailure({
          userUpdateError: error
        })
      );

      ToastUtils.handleToast({
        operation: "error",
        message: "Error updating details. Please try again later."
      });
    }
  }
};

const signoutUser = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  try {
    await firebase.auth().signOut();
  } catch (err) {
    ToastUtils.handleToast({
      operation: "error",
      message: "Error signing out."
    });
  }
};

export { updateUserDocument, signoutUser };
