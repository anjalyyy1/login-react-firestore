import * as types from "./types";

/**
 *
 * Store/Reset/Remove data dynamically based on .
 * @param {Object} payload - API response on success/error/loading
 * @param {String} type - type for sucess/error/loading
 */

export const onUserUpdate = (
  payload = null,
  type = types.RECEIVE_USER_UPDATE_SUCCESS
) => {
  return {
    type,
    payload
  };
};

export const isUserLoading = (payload = null, type = types.REQUEST_USER) => {
  return {
    type,
    payload
  };
};

export const onUserUpdateFailure = (
  payload = null,
  type = types.RECEIVE_USER_UPDATE_FAILURE
) => {
  return {
    type,
    payload
  };
};
