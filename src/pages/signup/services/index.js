import { get } from "lodash";

// import actions
import {
  onUserSignupSuccess,
  isUserLoading,
  onUserSignupFailure
} from "./actions";

import { storage } from "config/firebaseConfig";

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

    const uploadedImage = await storage
      .ref(`/images/${newUser.profilePicture.name}`)
      .put(newUser.profilePicture);

    const imageUrl = await storage
      .ref("images")
      .child(uploadedImage.metadata.name)
      .getDownloadURL();

    const signedUpUser = await firestore
      .collection("users")
      .doc(response.user.uid)
      .set({
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
  } catch (err) {
    dispatch(
      onUserSignupFailure({
        signupError: err
      })
    );
  }

  dispatch(
    isUserLoading({
      isUserLoading: false
    })
  );
};

export { userSignupHandler };

// const uploadTask = await firestorage
//       .ref(`/images/${profileImage.name}`)
//       .put(profileImage.value);

//     imageUrl = await firestorage
//       .ref("images")
//       .child(uploadTask.metadata.name)
//       .getDownloadURL();
// storage.child(`images/${newUser.profilePicture.name}`).put(newUser.profilePicture.value)
