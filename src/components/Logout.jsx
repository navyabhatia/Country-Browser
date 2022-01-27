import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Logout = () => {
  return (
    <div>
      <h1>Logged out sucessfully </h1>
      {
        /*localStorage.getItem("loggedin")
        ? localStorage.removeItem("loggedin")
        : alert("error")*/
        sessionStorage.getItem("auth-token")
          ? sessionStorage.removeItem("auth-token")
          : alert("error")
      }

      <Link to="/login" style={{ textDecoration: "none" }}>
        Login again to browse countries
      </Link>
    </div>
  );
};

export default Logout;
