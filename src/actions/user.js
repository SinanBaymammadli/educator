import axios from "axios";
import { MY_COURSES_SUCCESS } from "./types";

function getMyCoursesSuccess(data) {
  return {
    type: MY_COURSES_SUCCESS,
    data
  };
}

export function getMyCourses() {
  return dispatch => {
    const userId = localStorage.getItem("userId");
    return axios
      .get(`/wp-json/wp/v2/courses?author=${userId}&_embed`)
      .then(res => {
        dispatch(getMyCoursesSuccess(res.data));
      });
  };
}

export function getMyssCourses() {
  return dispatch =>
    axios
      .get(`http://localhost:8080/wp-json/wp/v2/courses?author=23`)
      .then(res => {
        dispatch(getMyCoursesSuccess(res.data));
      });
}
