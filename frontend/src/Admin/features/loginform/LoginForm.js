import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/commonRedux";
import style from "./LoginForm.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { API_URL } from "../../../config";
import { REACT_APP_START_URL } from "../../../environmentVariables";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

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
        credentials: "include", // Upewnij się, że cookie jest wysyłane i odbierane
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("data", data);
      if (data.role === "ADMIN") {
        const home = `${REACT_APP_START_URL}/home`;
        navigate(home);
      } else {
        setErrorMessage("Unauthorized");
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
            <button type="submit">Zaloguj</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
