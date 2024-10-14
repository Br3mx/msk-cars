import React from "react";
import style from "./Logout.module.scss";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/commonRedux";
const Logout = () => {
  const dispatch = useDispatch();
  const role = localStorage.getItem("role");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    dispatch(logoutUser());
    window.location.href = "/admin/msk-car/login";
  };
  return (
    <div className={style.container}>
      {role === "ADMIN" ? (
        <button className={style.logout} onClick={handleLogout}>
          WYLOGUJ
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Logout;
