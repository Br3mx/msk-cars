import React from "react";
import LoginForm from "../features/loginform/LoginForm";
import style from "./Login.module.scss";
const Login = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
