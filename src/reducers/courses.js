import { GET_COURSES_SUCCESS, GET_ONE_COURSE_SUCCESS } from "../actions/types";

const initialState = {
  courses: [],
  currentCourse: null
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_COURSES_SUCCESS:
      return {
        ...state,
        courses: action.data
      };
    case GET_ONE_COURSE_SUCCESS:
      return {
        ...state,
        currentCourse: action.data
      };
    default:
      return state;
  }
};
