import { REQUEST_LOGIN_ACTION_SUCCESS } from '../actions/actionTypes';

const initialState = {
  user: null,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LOGIN_ACTION_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default sessionReducer;
