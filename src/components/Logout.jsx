import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Logout = () => {
  return (
    <div>
      <h1>Logged out sucessfully </h1>
      {localStorage.getItem("loggedin")
        ? localStorage.removeItem("loggedin")
        : alert("error")}

      <Link to="/login" style={{ textDecoration: "none" }}>
        Login again to browse countries
      </Link>
    </div>
  );
};

export default Logout;
/*
<div>
      <h1>Logged out sucessfully </h1>
      {localStorage.getItem("loggedin")
        ? localStorage.setItem("loggedin", false)
        : alert("error")}
      <Link to="/login" style={{ textDecoration: "none" }}>
        Login again to browse countries
      </Link>
    </div>



    <div>
      <h1>Logged out sucessfully </h1>
      {localStorage.getItem("loggedin")
        ? localStorage.removeItem("loggedin")
        : alert("error")}
      <Link to="/login" style={{ textDecoration: "none" }}>
        Login again to browse countries
      </Link>
    </div>
*/
