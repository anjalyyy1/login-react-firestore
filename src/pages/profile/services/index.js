import { get } from "lodash";

// import actions
import { onUserUpdate, isUserLoading, onUserUpdateFailure } from "./actions";

const updateUserDocument = (updatedUser, userId) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  console.log(updatedUser, userId, "from services");
  const firestore = getFirestore();
  const userRef = firestore.doc(`users/${userId}`);
  const snapshot = await userRef.get();
  console.log({ snapshot }, "snap shot");
  if (snapshot.exists) {
    try {
      await userRef.update({
        ...updatedUser
      });
    } catch (error) {
      dispatch(
        onUserUpdateFailure({
          userUpdateError: error
        })
      );
    }
  }
  // return getUserDocument(user.uid);
};

const signoutUser = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  try {
    const response = await firebase.auth().signOut();
    console.log(response, "success sign out");
  } catch (err) {
    console.log("lll", err);
  }
};

export { updateUserDocument, signoutUser };
