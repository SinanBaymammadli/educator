import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import user from "./user";
import courses from "./courses";

export default combineReducers({
  form: formReducer,
  auth,
  user,
  courses
});
