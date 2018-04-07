import axios from "axios";
import { GET_COURSES_SUCCESS, GET_ONE_COURSE_SUCCESS } from "./types";

function getCoursesSuccess(data) {
  return {
    type: GET_COURSES_SUCCESS,
    data
  };
}

function getOneCourseSuccess(data) {
  return {
    type: GET_ONE_COURSE_SUCCESS,
    data
  };
}

export function getCourses() {
  return dispatch =>
    axios.get(`/wp-json/wp/v2/courses?_embed`).then(res => {
      dispatch(getCoursesSuccess(res.data));
    });
}

export function getOneCourse(id) {
  return dispatch =>
    axios.get(`/wp-json/wp/v2/courses/${id}?_embed`).then(res => {
      dispatch(getOneCourseSuccess(res.data));
    });
}
