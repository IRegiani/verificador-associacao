import {
  REQUEST_LOGIN_ACTION,
  REQUEST_LOGIN_ACTION_SUCCESS,
  REQUEST_LOGIN_ACTION_FAILURE,
} from './actionTypes';

// WIP: check rest
export const createAction = (type, payload, options) => ({ type, payload, options }); // if necessary this could be improved to hold optional parameters

export const requestLoginAction = (username, password, rememberOption) => createAction(REQUEST_LOGIN_ACTION, { username, password, rememberOption });

export const requestLoginActionSuccess = () => createAction(REQUEST_LOGIN_ACTION_SUCCESS);

export const requestLoginActionFailure = (error) => createAction(REQUEST_LOGIN_ACTION_FAILURE, error);
