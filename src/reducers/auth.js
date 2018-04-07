import { LOG_USER_IN, LOGIN_FAILED } from "../actions/types";

const initialState = {
  isLoggedIn: false,
  userDisplayName: null,
  error: ""
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOG_USER_IN:
      return {
        ...state,
        userDisplayName: action.data.user_display_name,
        isLoggedIn: true
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
