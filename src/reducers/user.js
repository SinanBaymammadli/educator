import { MY_COURSES_SUCCESS } from "../actions/types";

const initialState = {
  myCourses: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case MY_COURSES_SUCCESS:
      return {
        ...state,
        myCourses: action.data
      };
    default:
      return state;
  }
};
