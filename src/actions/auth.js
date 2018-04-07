import axios from "axios";
import { LOG_USER_IN, LOGIN_FAILED } from "./types";

export function logUserIn(data) {
  return {
    type: LOG_USER_IN,
    data
  };
}

export function loginFailed(error) {
  return {
    type: LOGIN_FAILED,
    error
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
        localStorage.setItem("userDisplayName", user_display_name);
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

    axios
      .post("/wp-json/jwt-auth/v1/token", loginInfo)
      .then(res => {
        const { token, user_display_name, user_nicename } = res.data;
        localStorage.setItem("userToken", token);
        localStorage.setItem("userDisplayName", user_display_name);
        axios.defaults.headers.post.Authorization = `Bearer ${token}`;
        dispatch(logUserIn(res.data));

        axios
          .get(`/wp-json/wp/v2/users?slug=${user_nicename}`)
          .then(response => {
            localStorage.setItem("userId", response.data[0].id);
          });
      })
      .catch(err => {
        dispatch(loginFailed(err.response.data.message));
      });
  };
}

export function logout() {
  localStorage.removeItem("userToken");
  localStorage.removeItem("userDisplayName");
  localStorage.removeItem("userId");
  window.location.reload();
}
