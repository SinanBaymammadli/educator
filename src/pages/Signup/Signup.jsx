import React from "react";
import { connect } from "react-redux";
import SignupForm from "../../components/SignupForm/SignupForm";
import style from "./Signup.module.css";

const Signup = () => (
  <div className={style.AuthPage}>
    <h2>Sign up</h2>
    <SignupForm onSubmit={() => console.log("sign up")} />
  </div>
);

export default connect(null, null)(Signup);
