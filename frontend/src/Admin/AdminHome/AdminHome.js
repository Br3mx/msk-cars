import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Ścieżka do customowego hooka

const AdminHome = () => {
  const navigate = useNavigate();
  const { isAuthenticated, userRole } = useAuth();

  React.useEffect(() => {
    if (!isAuthenticated || userRole !== "admin") {
      navigate("/login");
    }
  }, [isAuthenticated, userRole, navigate]);

  return <div>AdminHome</div>;
};

export default AdminHome;
