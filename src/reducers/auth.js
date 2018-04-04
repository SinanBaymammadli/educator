import { LOG_USER_IN, LOG_USER_OUT } from "../actions/types";

const initialState = {
  isLoggedIn: false,
  name: null
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOG_USER_IN:
      return {
        ...state,
        name: action.data.user_display_name,
        isLoggedIn: true
      };
    case LOG_USER_OUT:
      return {
        ...state,
        isLoggedIn: false,
        name: null
      };
    default:
      return state;
  }
};
