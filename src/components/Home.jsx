import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>welcome to country browser</h1>
      <Link to="/login" style={{ textDecoration: "none" }}>
        Login Here !
      </Link>
    </div>
  );
};

export default Home;
