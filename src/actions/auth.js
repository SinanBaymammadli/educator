import axios from "axios";
import { LOG_USER_IN, LOG_USER_OUT } from "./types";

export function logUserIn(data) {
  return {
    type: LOG_USER_IN,
    data
  };
}

export function logUserOut() {
  return {
    type: LOG_USER_OUT
  };
}

export function register(data) {
  return dispatch => {
    const signupInfo = {
      username: data.email,
      name: data.name,
      email: data.email,
      password: data.password
    };

    return axios.post("/wp-json/wp/v2/users", signupInfo).then(response => {
      const loginInfo = {
        username: response.data.username,
        password: data.password
      };

      axios.post("/wp-json/jwt-auth/v1/token", loginInfo).then(res => {
        const { token, user_display_name } = res.data;
        localStorage.setItem("userToken", token);
        localStorage.setItem("name", user_display_name);
        dispatch(logUserIn(res.data));
      });
    });
  };
}

export function login(data) {
  return dispatch => {
    const loginInfo = {
      username: data.email,
      password: data.password
    };

    axios.post("/wp-json/jwt-auth/v1/token", loginInfo).then(res => {
      const { token, user_display_name } = res.data;
      localStorage.setItem("userToken", token);
      localStorage.setItem("name", user_display_name);
      dispatch(logUserIn(res.data));
    });
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("name");
    dispatch(logUserOut());
  };
}
