import React from "react";
import style from "./Login.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => (
  <div className={style.AuthPage}>
    <h2>Log in</h2>
    <LoginForm onSubmit={() => console.log("sign up")} />
  </div>
);

export default Login;
