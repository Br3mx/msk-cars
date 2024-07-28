import React, { useState } from "react";
import style from "./LoginForm.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { REACT_APP_START_URL } from "../../../environmentVariables";
import { API_URL } from "../../../config";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const redirectUrl = `${REACT_APP_START_URL}/home`;
        localStorage.setItem("token", response.headers.get("Authorization"));
        setTimeout(() => {
          navigate(redirectUrl);
        }, 1000);
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className={style.container}>
      <span>
        <img src="/img/logo.png" alt="logo" />
      </span>
      <div className={style.content}>
        <form className={style.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className={style.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className={style.password}
              value={formData.password}
              onChange={handleInputChange}
            />
            <span
              type="button"
              onClick={togglePasswordVisibility}
              className={style.showPassword}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          {errorMessage && <p className={style.error}>{errorMessage}</p>}
          <div className={style.contBtn}>
            <button onClick={handleSubmit} type="submit">
              Zaloguj
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
